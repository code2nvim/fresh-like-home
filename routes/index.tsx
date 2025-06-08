import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { Anchor } from "../components/Anchor.tsx";
import { Login } from "./(_components)/Login.tsx";

interface Data {
  allowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ allowed: cookies.auth === "allowed" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    data.allowed
      ? (
        <main
          class={[
            "mx-2 flex flex-col items-center gap-4 rounded-md px-8 py-12",
            "sm:flex-row sm:items-start",
            "bg-green-200 dark:bg-green-800",
          ].join(" ")}
        >
          <Anchor href="documents">Documents</Anchor>
          <Anchor href="notes">Notes</Anchor>
          <Anchor href="videos">Video</Anchor>
        </main>
      )
      : <Login />
  );
}
