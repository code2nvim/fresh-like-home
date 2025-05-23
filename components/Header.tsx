import { ThemeButton, ThemeHome } from "../islands/theme.tsx";

export function Header() {
  return (
    <header class="grid grid-cols-2 p-2">
      <div className="flex">
        <ThemeHome className="h-full aspect-square"/>
      </div>
      <div class="flex justify-end">
        <ThemeButton />
      </div>
    </header>
  );
}
