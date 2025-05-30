import { PageProps } from "$fresh/server.ts";

export default function Documents(props: PageProps) {
  return <main class="mx-auto grow">Page: {props.url.href}</main>;
}
