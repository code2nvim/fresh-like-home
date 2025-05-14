import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { ThemeLayout } from "../islands/theme.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <ThemeLayout
      class={[
        "flex min-h-screen flex-col",
        "bg-white text-black dark:bg-black dark:text-white",
      ].join(" ")}
    >
      <Header />
      <Component />
      <footer>footer</footer>
    </ThemeLayout>
  );
}
