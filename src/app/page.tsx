import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Error of Next.js on Vercel</h1>
      <section>
        <h2>Client Component</h2>
        <Link href={"/Client"}>→Client Component Error</Link>
      </section>
      <section>
        <h2>Server Component</h2>
        <Link href={"/Server"}>→Server Component Error</Link>
      </section>
      <section>
        <h2>Server Action ("use-server";)</h2>
        <Link href={"/ServerAction"}>→Server Action Error</Link>
      </section>
      <section>
        <h2>Edge Function</h2>
        <Link href={"/Edge"}>→Edge Function Error</Link>
      </section>
    </main>
  );
}
