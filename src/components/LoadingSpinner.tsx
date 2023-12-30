import React from 'react'

export default function LoadingSpinner({ colored }: { colored?: boolean }) {
  return <div className={`loading-spinner ${colored && 'colored'}`} />
}
