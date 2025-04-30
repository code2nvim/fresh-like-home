import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <main class="grow mx-auto py-8">
        <h1 class="text-4xl font-bold">404 - Page not found</h1>
      </main>
    </>
  );
}
