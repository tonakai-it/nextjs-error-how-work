export const dynamic = 'force-dynamic';
export default async function Page() {
  console.error('server component console error');
  return (
    <>
      Server Component Console Error
    </>
  )
}