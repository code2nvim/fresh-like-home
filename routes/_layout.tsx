import { PageProps } from "$fresh/server.ts";
import { Footer } from "./(_components)/Footer.tsx";
import { Header } from "./(_components)/Header.tsx";
import { ThemeLayout } from "../islands/Theme.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <ThemeLayout
      class={[
        "flex min-h-screen flex-col",
        "bg-slate-200 text-black dark:bg-slate-800 dark:text-white",
      ].join(" ")}
    >
      <Header />
      <div class="grid grow">
        <Component />
      </div>
      <Footer />
    </ThemeLayout>
  );
}
