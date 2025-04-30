import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="flex min-h-screen flex-col bg-black text-white">
      <header>header</header>
      <Component />
      <footer>footer</footer>
    </div>
  );
}
