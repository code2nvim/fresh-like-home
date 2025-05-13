import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { JSX } from "preact";

type Theme = "dark" | "light";

function localTheme(): Theme {
  return (localStorage.getItem("theme") ||
    (IS_BROWSER && matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light")) as Theme;
}

const theme = signal<Theme>(localTheme());

export function ThemeButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const toggle = () => {
    const newTheme: Theme = theme.value == "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    theme.value = newTheme;
  };
  return (
    <button {...props} onClick={toggle} type="button">
      {theme}
    </button>
  );
}

export function ThemeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} class={[theme, props.class].join(" ")} />;
}
