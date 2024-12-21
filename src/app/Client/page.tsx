"use client";
import { MouseEvent } from "react"

export const Page = () => {
  function handleClickConsoleError(_:MouseEvent) {
    console.error('client component cosnole error.');
  }
  function handleClickThrowError(_:MouseEvent) {
    throw new Error('client componentThrow Error.');
  };

  return(
    <section>
      <h1>Client Component Error</h1>
      <button onClick={handleClickConsoleError}>console.error</button>
      <button onClick={handleClickThrowError}>throw new Error</button>
    </section>
  )
}

export default Page