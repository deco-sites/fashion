import { useCallback } from "preact/hooks";
import getSupabaseClient from "$live/supabase.ts";

export default function LoginButtons() {
  const redirectTo = window.location?.protocol + "//" + window.location?.host +
    "/live/login/success";
  const google = useCallback(() => {
    getSupabaseClient().auth.signIn({ provider: "google" }, {
      shouldCreateUser: true,
      redirectTo,
    });
  }, []);
  const github = useCallback(() => {
    getSupabaseClient().auth.signIn({ provider: "github" }, {
      shouldCreateUser: true,
      redirectTo,
    });
  }, []);
  return (
    <div class="mb-16 text-center w-80">
      <h3 class="mb-6 text-lg md:text-xl leading-tight tracking-tighter">
        Como você prefere se autenticar?
      </h3>
      <div class="flex flex-col items-center">
        <div class="px-4 mb-10">
          <div>
            <button
              class="p-3 border-1 rounded-xl border-solid bg-primary-light text-primary-dark"
              type="button"
              onClick={google}
            >
              Login com Google
            </button>
          </div>
        </div>
        <div class="px-4 mb-10">
          <div>
            <button
              class="p-3 border-1 rounded-xl border-solid bg-primary-light text-primary-dark"
              type="button"
              onClick={github}
            >
              Login com Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
