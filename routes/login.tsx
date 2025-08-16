import { Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { loginCount } from "../utils/loginCount.ts";

export interface LoginData {
  allowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    if (cookies["auth"] === "allowed") {
      return Response.redirect(new URL("/", req.url));
    } else {
      return ctx.render!();
    }
  },
};

export default async function Login() {
  const count = await loginCount();

  return (
    <main class="flex flex-col items-center gap-4 p-8">
      <h1 class="text-4xl">Login</h1>
      <form
        method="post"
        action="/api/login"
        class="flex max-w-sm flex-col items-center gap-2"
      >
        <input
          type="text"
          name="username"
          class="border bg-white text-black dark:bg-black dark:text-white"
        />
        <input
          type="password"
          name="password"
          class="border bg-white text-black dark:bg-black dark:text-white"
        />
        <button
          type="submit"
          class="w-1/3 rounded border border-black dark:border-white"
        >
          Login
        </button>
        <p>Login count: {count}</p>
      </form>
    </main>
  );
}
