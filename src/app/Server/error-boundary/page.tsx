import { CustomErrorBoundary } from "./ErrorBoundary";


async function ThrowError() {
  if (true) throw new Error('server component error wrapped error boundary');
  return <div>
    throw Error!
  </div>
}

export default function Page() {
  "use client";
  return (
    <div>
      <CustomErrorBoundary>
        <ThrowError />
      </CustomErrorBoundary>
    </div>
  )
}