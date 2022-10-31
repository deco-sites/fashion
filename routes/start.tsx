import { PageProps } from "$fresh/server.ts";
import GetStarted from "../components/GetStarted.tsx";
import Head from "../components/Head.tsx";

export default function TestRoute({ url }: PageProps<any>) {
  return (
    <>
      <Head url={url} title="Welcome to Live" />
      <GetStarted />
    </>
  );
}
