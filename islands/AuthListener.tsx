import { AuthChangeEvent } from "supabase";
import { useAuthStateChange } from "$live/auth.tsx";

export default function AuthListener() {
  useAuthStateChange((event: AuthChangeEvent) => {
    if (event === "SIGNED_IN") {
      window.location.replace("/admin");
    } else if (event === "SIGNED_OUT") {
      window.location.replace("/");
    }
  });
  return <span></span>;
}
