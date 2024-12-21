import Link from "next/link"
export const dynamic = 'force-dynamic';

export default function  Page () {
  "use client"

  return(
    <section>
      <h1>Server Error</h1>
      <Link href={"/Server/console"}>console</Link>
      <br />
      <Link href={"/Server/throw-new-error"}>Throw new Error</Link>
      <br />
      <Link href={"/Server/error-boundary"}>Wrapped ErrorBoundary</Link>
    </section>
  )
}