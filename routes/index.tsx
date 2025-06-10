import type { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { Anchor } from "../components/Anchor.tsx";
import { LoginData } from "../utils/login.ts";
import { Login } from "./(_islands)/Login.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ allowed: cookies.auth === "allowed" });
  },
};

export default async function Home(_req: Request, ctx: FreshContext<LoginData>) {
  const data = await ctx.data;

  return (
    <Login allowed={data.allowed}>
      <main
        class={[
          "mx-2 flex flex-col items-center gap-4 rounded-md px-8 py-12",
          "sm:flex-row sm:items-start sm:justify-center",
          "bg-green-200 dark:bg-green-800",
        ].join(" ")}
      >
        <Anchor href="documents">Documents</Anchor>
        <Anchor href="notes">Notes</Anchor>
        <Anchor href="videos">Video</Anchor>
      </main>
    </Login>
  );
}
