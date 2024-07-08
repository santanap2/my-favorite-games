import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-neutral-100 bg-opacity-10 text-transparent select-none',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
