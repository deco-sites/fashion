import { PageProps } from "$fresh/server.ts";
import GetStarted from "../sections/GetStarted.tsx";
import Head from "../sections/Head.tsx";

export default function TestRoute({ url }: PageProps<any>) {
  return (
    <>
      <Head url={url} title="Welcome to Live" />
      <GetStarted />
    </>
  );
}
