/// <reference lib="deno.unstable" />

const key = ["login", "count"];
const kv = await Deno.openKv();
await kv.set(key, 0);

export async function loginCount(): Promise<number> {
  return (await kv.get<number>(key)).value!;
}

export async function addLoginCount(): Promise<void> {
  const count = await kv.get<number>(key);
  kv.set(key, count.value! + 1);
}
