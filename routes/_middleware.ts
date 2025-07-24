import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { LoginData } from "./login.tsx";

export async function handler(req: Request, ctx: FreshContext<LoginData>) {
  const cookies = getCookies(req.headers);
  ctx.state = { allowed: cookies.auth === "allowed" };

  const allowed = ctx.destination !== "route" ||
    ctx.state.allowed ||
    ctx.url.pathname === "/login" ||
    ctx.url.pathname === "/api/login";

  if (allowed) {
    return await ctx.next();
  } else {
    return Response.redirect(new URL("/login", req.url));
  }
}
