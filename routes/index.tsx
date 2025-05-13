import { Button } from "../components/Button.tsx";

export default function Home() {
  return (
    <main
      class={[
        "grow flex flex-col justify-center",
        "bg-slate-200 dark:bg-slate-600",
      ].join(" ")}
    >
      <Button type="button">button</Button>
    </main>
  );
}
