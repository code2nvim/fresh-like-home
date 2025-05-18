import { JSX } from "preact";

export function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class={[
        "flex w-full justify-center rounded-xl border-4 p-8 text-xl",
        "border-slate-100 dark:border-slate-600",
        props.class,
      ].join(" ")}
    />
  );
}
