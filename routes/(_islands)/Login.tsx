import { ComponentChildren } from "preact";

interface LoginProps {
  children: ComponentChildren;
  allowed: boolean;
}

export function Login({ allowed, children }: LoginProps) {
  return allowed
    ? <>{children}</>
    : (
      <main class="flex flex-col items-center gap-4 p-8">
        <h1 class="text-4xl">Login</h1>
        <form
          method="post"
          action="/api/login"
          class="flex max-w-sm flex-col items-center gap-2"
        >
          <input
            type="text"
            name="username"
            class="border bg-white text-black dark:bg-black dark:text-white"
          />
          <input
            type="password"
            name="password"
            class="border bg-white text-black dark:bg-black dark:text-white"
          />
          <button
            type="submit"
            class="w-1/3 rounded border border-black dark:border-white"
          >
            Submit
          </button>
        </form>
      </main>
    );
}
