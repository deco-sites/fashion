/**
 * @file Rutt is a tiny http router designed for use with deno and deno deploy.
 * It is written in about 200 lines of code and is pretty fast, using an
 * extended type of the web-standard {@link URLPattern} to provide fast and
 * easy route matching.
 */

import type { ConnInfo } from "https://deno.land/std@0.152.0/http/server.ts";

/**
 * Provides arbitrary context to {@link Handler} functions along with
 * {@link ConnInfo connection information}.
 */
export type HandlerContext<T = unknown> = T & ConnInfo;

/**
 * A handler for HTTP requests. Consumes a request and {@link HandlerContext}
 * and returns an optionally async response.
 */
export type Handler<T = unknown> = (
  req: Request,
  ctx: HandlerContext<T>,
) => Response | Promise<Response>;

/**
 * A handler type for anytime the `MatchHandler` or `other` parameter handler
 * fails
 */
export type ErrorHandler<T = unknown> = (
  req: Request,
  ctx: HandlerContext<T>,
  err: unknown,
) => Response | Promise<Response>;

/**
 * A handler type for anytime a method is received that is not defined
 */
export type UnknownMethodHandler<T = unknown> = (
  req: Request,
  ctx: HandlerContext<T>,
  knownMethods: string[],
) => Response | Promise<Response>;

/**
 * A handler type for a router path match which gets passed the matched values
 */
export type MatchHandler<T = unknown> = (
  req: Request,
  ctx: HandlerContext<T>,
  match: Record<string, string>,
) => Response | Promise<Response>;

/**
 * A record of route paths and {@link MatchHandler}s which are called when a match is
 * found along with it's values.
 *
 * The route paths follow the {@link URLPattern} format with the addition of
 * being able to prefix a route with a method name and the `@` sign. For
 * example a route only accepting `GET` requests would look like: `GET@/`.
 */
// deno-lint-ignore ban-types
export type Routes<T = {}> = Record<string, MatchHandler<T>>;

/**
 * The internal route object contains either a {@link RegExp} pattern or
 * {@link URLPattern} which is matched against the incoming request
 * URL. If a match is found for both the pattern and method the associated
 * {@link MatchHandler} is called.
 */
// deno-lint-ignore ban-types
export type InternalRoute<T = {}> = {
  pattern: RegExp | URLPattern;
  methods: Record<string, MatchHandler<T>>;
};

/**
 * An array of {@link InternalRoute internal route} objects which the
 * {@link Routes routes} record is mapped into. This array is used internally
 * in the {@link router} function and can even be passed directly to it if you
 * do not wish to use the {@link Routes routes} record or want more fine grained
 * control over matches, for example by using a {@link RegExp} pattern instead
 * of a {@link URLPattern}.
 */
// deno-lint-ignore ban-types
export type InternalRoutes<T = {}> = InternalRoute<T>[];

/**
 * The default other handler for the router. By default it responds with `null`
 * body and a status of 404.
 */
export function defaultOtherHandler(_req: Request): Response {
  return new Response(null, {
    status: 404,
  });
}

/**
 * The default error handler for the router. By default it responds with `null`
 * body and a status of 500 along with `console.error` logging the caught error.
 */
export function defaultErrorHandler(
  _req: Request,
  _ctx: HandlerContext,
  err: unknown,
): Response {
  console.error(err);

  return new Response(null, {
    status: 500,
  });
}

/**
 * The default unknown method handler for the router. By default it responds
 * with `null` body, a status of 405 and the `Accept` header set to all
 * {@link METHODS known methods}.
 */
export function defaultUnknownMethodHandler(
  _req: Request,
  _ctx: HandlerContext,
  knownMethods: string[],
): Response {
  return new Response(null, {
    status: 405,
    headers: {
      Accept: knownMethods.join(", "),
    },
  });
}

/**
 * All known HTTP methods.
 */
export const METHODS = [
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "OPTIONS",
  "PATCH",
] as const;

const methodRegex = new RegExp(`(?<=^(?:${METHODS.join("|")}))@`);

/**
 * Builds an {@link InternalRoutes} array from a {@link Routes} record.
 *
 * @param routes A {@link Routes} record
 * @returns The built {@link InternalRoutes}
 */
export function buildInternalRoutes<T = unknown>(
  routes: Routes<T>,
): InternalRoutes<T> {
  const internalRoutesRecord: Record<
    string,
    { pattern: URLPattern; methods: Record<string, MatchHandler<T>> }
  > = {};
  for (const [route, handler] of Object.entries(routes)) {
    let [methodOrPath, path] = route.split(methodRegex);
    let method = methodOrPath;
    if (!path) {
      path = methodOrPath;
      method = "any";
    }
    const r = internalRoutesRecord[path] ?? {
      pattern: new URLPattern({ pathname: path }),
      methods: {},
    };
    r.methods[method] = handler;
    internalRoutesRecord[path] = r;
  }

  return Object.values(internalRoutesRecord);
}

/**
 * A simple and tiny router for deno
 *
 * @example
 * ```ts
 * import { serve } from "https://deno.land/std/http/server.ts";
 * import { router } from "https://deno.land/x/rutt/mod.ts";
 *
 * await serve(
 *   router({
 *     "/": (_req) => new Response("Hello world!", { status: 200 }),
 *   }),
 * );
 * ```
 *
 * @param routes A record of all routes and their corresponding handler functions
 * @param other An optional parameter which contains a handler for anything that
 * doesn't match the `routes` parameter
 * @param error An optional parameter which contains a handler for any time it
 * fails to run the default request handling code
 * @param unknownMethod An optional parameter which contains a handler for any
 * time a method that is not defined is used
 * @returns A deno std compatible request handler
 */
export function router<T = unknown>(
  routes: Routes<T> | InternalRoutes<T>,
  other: Handler<T> = defaultOtherHandler,
  error: ErrorHandler<T> = defaultErrorHandler,
  unknownMethod: UnknownMethodHandler<T> = defaultUnknownMethodHandler,
): Handler<T> {
  const internalRoutes = Array.isArray(routes)
    ? routes
    : buildInternalRoutes(routes);

  return async (req, ctx) => {
    try {
      for (const { pattern, methods } of internalRoutes) {
        let res: URLPatternResult | RegExpExecArray | null;
        let groups: Record<string, string>;

        if (pattern instanceof URLPattern) {
          res = pattern.exec(req.url);
          groups = res?.pathname.groups ?? {};
        } else {
          res = pattern.exec(req.url);
          groups = res?.groups ?? {};
        }

        if (res !== null) {
          for (const [method, handler] of Object.entries(methods)) {
            if (req.method === method) {
              return await handler(
                req,
                ctx,
                groups,
              );
            }
          }

          if (methods["any"]) {
            return await methods["any"](
              req,
              ctx,
              groups,
            );
          } else {
            return await unknownMethod(
              req,
              ctx,
              Object.keys(methods),
            );
          }
        }
      }

      return await other(req, ctx);
    } catch (err) {
      return error(req, ctx, err);
    }
  };
}
