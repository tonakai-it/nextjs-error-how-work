"use client";
import { MouseEvent } from "react";
import { consoleError, throwNewError } from "./server_action";

export default function Page () {
    function handleClickConsoleError(_:MouseEvent) {
      consoleError();
    }
    function handleClickThrowError(_:MouseEvent) {
      throwNewError();
    };
  return(
    <section>
      <h1>Server Action Error</h1>
      <button onClick={handleClickConsoleError}>console.error</button>
      <button onClick={handleClickThrowError}>throw new Error</button>
    </section>
  )
}