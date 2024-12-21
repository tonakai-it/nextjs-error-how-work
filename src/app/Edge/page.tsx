"use client"
import { MouseEvent } from "react";

export default function  Page () {
  async function handleClickConsoleError(_:MouseEvent) {
    const res = await fetch('/api/v1/edge_error?mode=console');
    const data = await res.json();
    console.log(data)
  }
  async function handleClickThrowError(_:MouseEvent) {
    const res = await fetch('/api/v1/edge_error?mode=throw-new-error');
    const data = await res.json();
    console.log(data)
  };
  return(
    <section>
      <h1>Edge Function Error</h1>
      <button onClick={handleClickConsoleError}>console.error</button>
      <button onClick={handleClickThrowError}>throw new Error</button>
    </section>
  )
}