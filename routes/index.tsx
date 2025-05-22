import { Anchor } from "../components/Anchor.tsx";

export default function Home() {
  return (
    <main
      class={[
        "mx-2 flex grow flex-col items-center rounded-md px-8 py-12",
        "bg-green-200 dark:bg-green-800",
      ].join(" ")}
    >
      <Anchor href="video">Video</Anchor>
    </main>
  );
}
