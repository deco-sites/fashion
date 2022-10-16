# Deco Start — live template

Welcome to your live site!

This repository was created for you when you created a new site. To edit the
code of the components in this site, you may clone this repo and run the project
locally.

---

NOTE: To edit or create new pages with existing components, you don't need to
edit the code! Just go to any page and hit `Ctrl+E` (or `Cmd+E` on Mac) to open
the editor of the current page you're seeing.

---

After cloning this repo, create an `.env` file with the `SITE` variable with the
name of this github repo.

```sh
SITE=mysitename
```

**IMPORTANT:** Your site should match the repository name in
[github.com/deco-pages](https://github.com/deco-pages).

## Usage

Start the project:

```sh
deno task start
```

Go to [https://localhost:8080/start](https://localhost:8080/start)

This is a static route defined in `routes/start.tsx`. Editing the file will live
reload the page.

Now go to [https://localhost:8080](https://localhost:8080)

If this is a brand new site, you should see the "Create new page" button. This
happens because you are in a development host (localhost) and there is no page
currently at `/`. (In production, there should be a 404 error — check it out
yourself in [https://site.deco.page/](https://my-sites.deco.page/)).

To create a new page, click the button.

Now you have entered the edit mode for the new page `/`. You can add new
components and edit their content and props.

You can also go into sandbox mode. Just go to
[https://localhost:8080/sandbox/ComponentName](https://localhost:8080/sandbox/ComponentName)
and you will have a live playground for that component with an live in-memory
props editor.
