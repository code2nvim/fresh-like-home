import { ThemeButton, ThemeHome } from "../../islands/Theme.tsx";

export function Header() {
  return (
    <header class="grid grid-cols-2 p-2">
      <div className="flex">
        <ThemeHome className="aspect-square h-full" />
      </div>
      <div class="flex justify-end">
        <ThemeButton />
      </div>
    </header>
  );
}
