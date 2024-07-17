'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-neutral-900 group-[.toaster]:backdrop-blur-sm group-[.toaster]:bg-opacity-70 group-[.toaster]:text-neutral-200 group-[.toaster]:border-neutral-800 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-neutral-200',
          actionButton: 'group-[.toast]:bg-red-700 group-[.toast]:text-red-500',
          cancelButton:
            'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-200',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
