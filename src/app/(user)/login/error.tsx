'use client'

import Login from './page'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <Login errorMessage={error.message} />
}
