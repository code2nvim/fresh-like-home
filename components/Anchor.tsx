import { JSX } from "preact";

export function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class={[
        "flex w-full justify-center rounded-xl border p-8 text-xl shadow-lg",
        "border-green-300 dark:border-green-700",
        props.class,
      ].join(" ")}
    />
  );
}
