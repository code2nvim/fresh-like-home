import { walk } from "$std/fs/walk.ts";
import { DIR_DOCS } from "../utils/env.ts";

export default async function Documents() {
  const files = (await Array.fromAsync(walk(DIR_DOCS))).sort((a, b) =>
    a.path.localeCompare(b.path)
  );

  return (
    <main class="w-full">
      {files.map(({ isFile, name, path }) => {
        return isFile && <div key={path}>{name}</div>;
      })}
    </main>
  );
}
