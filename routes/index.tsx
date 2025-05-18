import { Anchor } from "../components/Anchor.tsx";

export default function Home() {
  return (
    <main
      class={[
        "flex grow flex-col items-center px-8 py-12 rounded-md mx-2",
        "bg-slate-300 dark:bg-slate-800",
      ].join(" ")}
    >
      <Anchor href="video">Video</Anchor>
    </main>
  );
}
