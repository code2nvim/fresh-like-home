import { ThemeButton } from "../islands/theme.tsx";

export function Header() {
  return (
    <header class="grid grid-cols-2 px-2 py-1">
      <div>
        <button type="button">HomeButon</button>
      </div>
      <div class="flex justify-end">
        <ThemeButton />
      </div>
    </header>
  );
}
