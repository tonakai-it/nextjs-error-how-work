"use server";
export async function consoleError() {
  console.error('server action console error');
};

export async function throwNewError() {
  throw new Error('server action Throw new Error');
};