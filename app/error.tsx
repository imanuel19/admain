'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="p-4 bg-red-50 text-red-800">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="my-2">{error.message}</p>
      <button
        className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
