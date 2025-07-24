import type { FreshContext } from "$fresh/server.ts";
import { Anchor } from "../components/Anchor.tsx";
import { LoginData } from "./login.tsx";

export default async function Home(
  _req: Request,
  ctx: FreshContext<LoginData>,
) {
  const state = await Promise.resolve(ctx.state); // prevent warning

  return (
    <>
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

      <div class="pointer-events-none absolute inset-0 flex min-h-screen w-full items-center justify-center">
        {state.allowed && (
          <a href="/logout" class="pointer-events-auto">logout</a>
        )}
      </div>
    </>
  );
}
