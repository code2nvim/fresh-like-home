import type { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
    if (
      form.get("username") === Deno.env.get("LOGIN_USER") &&
      form.get("password") === Deno.env.get("LOGIN_PASSWORD")
    ) {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "allowed",
        maxAge: 120,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });
      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};
