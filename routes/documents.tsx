import { walk } from "$std/fs/walk.ts";
import { DIR_DOCS } from "../utils/env.ts";

export default async function Documents() {
  const files = (await Array.fromAsync(walk(DIR_DOCS))).sort((a, b) =>
    a.path.localeCompare(b.path)
  );

  return (
    <main class="w-full">
      <ul class="flex grow flex-col items-center justify-around gap-3 overflow-y-scroll p-6">
        {files.map(({ isFile, name, path }) => {
          const uri = path.replace(DIR_DOCS, "");
          const api = "/api/docs/" + encodeURIComponent(uri);
          return (
            isFile && (
              <li
                key={path}
                class="w-full rounded-md border-2 border-[gray] text-xl"
              >
                <a href={api}>{name}</a>
              </li>
            )
          );
        })}
      </ul>
    </main>
  );
}
