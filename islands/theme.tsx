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
        } stroke-2`}
        viewBox="-1 -1 27 27"
      >
        <polygon
          class={`${
            theme.value == "dark" ? "stroke-current" : "stroke-current"
          }`}
          points="12,0 0,8 0,25 7,25 7,15 17,15 17,25 24,25 24,8"
        />
      </svg>
    </a>
  );
}

export function ThemeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      {IS_BROWSER && <div {...props} class={[props.class, theme].join(" ")} />}
    </>
  );
}

export function FreshLogo() {
  return (
    <img
      width="197"
      height="37"
      src={theme.value == "dark"
        ? "https://fresh.deno.dev/fresh-badge-dark.svg"
        : "https://fresh.deno.dev/fresh-badge.svg"}
      alt="Made with Fresh"
    />
  );
}
