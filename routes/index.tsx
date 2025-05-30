import { Anchor } from "../components/Anchor.tsx";

export default function Home() {
  return (
    <main
      class={[
        "mx-2 flex flex-col items-center gap-4 rounded-md px-8 py-12",
        "bg-green-200 dark:bg-green-800",
      ].join(" ")}
    >
      <Anchor href="documents">Documents</Anchor>
      <Anchor href="videos">Video</Anchor>
    </main>
  );
}
