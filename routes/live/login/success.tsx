import AuthListener from "../../../islands/AuthListener.tsx";

export default function Login() {
  return (
    <>
      <AuthListener />
      <div class="grid place-items-center h-screen">
        <div class="flex flex-col items-center">
          loading...
        </div>
      </div>
    </>
  );
}
