import type { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

const USERNAME = Deno.env.get("LOGIN_USERNAME");
const PASSWORD = Deno.env.get("LOGIN_PASSWORD");

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
    if (
      form.get("username") === USERNAME &&
      form.get("password") === PASSWORD
    ) {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "allowed",
        maxAge: 1200,
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
