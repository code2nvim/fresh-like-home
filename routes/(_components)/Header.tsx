import { ThemeButton, ThemeHome } from "../../islands/Theme.tsx";

interface HeaderProps {
  url: URL;
}

export function Header({ url }: HeaderProps) {
  const page = pageName(url);

  return (
    <header class="grid grid-cols-3 p-2">
      <div className="flex">
        <ThemeHome className="aspect-square h-full" />
      </div>
      <h1 className="flex justify-center">{page}</h1>
      <div class="flex justify-end">
        <ThemeButton />
      </div>
    </header>
  );
}

function pageName(url: URL): string {
  const page = url.pathname.split("/")[1];

  switch (page) {
    case "":
      return "Home";
    case "documents":
      return "Documents";
    case "login":
      return "Login";
    case "notes":
      return "Notes";
    case "videos":
      return "Videos";
    default:
      return "Error: page name is not definded";
  }
}
