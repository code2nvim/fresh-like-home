import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { readTextFile } from "jsr:@std/fs/unstable-read-text-file";

export default defineConfig({
  plugins: [tailwind()],
  server: {
    cert: await readTextFile(".local/public_certificate.pem"),
    key: await readTextFile(".local/private_key.pem"),
  },
});
