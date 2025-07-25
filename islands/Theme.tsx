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

export function ThemeHome(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} href="/">
      <svg
        class={`${
          IS_BROWSER && location.pathname == "/" ? "fill-current" : "fill-none"
        } stroke-current stroke-2`}
        viewBox="-1 -1 27 27"
      >
        <polygon points="12,0 0,8 0,25 8,25 8,15 16,15 16,25 24,25 24,8" />
      </svg>
    </a>
  );
}

export function ThemeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} class={[props.class, theme].join(" ")} />;
}

export function FreshLogo() {
  return (
    <img
      src={theme.value == "dark"
        ? "https://fresh.deno.dev/fresh-badge-dark.svg"
        : "https://fresh.deno.dev/fresh-badge.svg"}
      alt="Made with Fresh"
      width="197"
      height="37"
    />
  );
}
