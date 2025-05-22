import { JSX } from "preact";

export function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class={[
        "flex w-full justify-center rounded-xl border-2 p-8 text-xl shadow-lg",
        "border-green-100 dark:border-green-900",
        props.class,
      ].join(" ")}
    />
  );
}
