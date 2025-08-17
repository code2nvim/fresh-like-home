import { Handlers } from "$fresh/server.ts";
import { serveFile } from "$std/http/file_server.ts";
import { DIR_DOCS } from "../../../utils/env.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    try {
      const doc = DIR_DOCS + decodeURIComponent(ctx.params.filename);
      return await serveFile(req, doc);
    } catch {
      return new Response("404 Not Found", { status: 404 });
    }
  },
};
