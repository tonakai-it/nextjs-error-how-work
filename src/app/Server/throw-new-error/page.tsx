export const dynamic = 'force-dynamic';

export default async function Page() {
  if (true) {
    throw new Error('server component throw new error');
  }
  return (
    <>
      Server Component Throw Error
    </>
  )
}