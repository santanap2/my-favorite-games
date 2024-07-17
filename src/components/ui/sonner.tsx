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
            'group toast group-[.toaster]:bg-stone-900 group-[.toaster]:backdrop-blur-sm group-[.toaster]:bg-opacity-70 group-[.toaster]:text-stone-300 group-[.toaster]:border-stone-800 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-stone-300',
          actionButton: 'group-[.toast]:bg-red-700 group-[.toast]:text-red-500',
          cancelButton:
            'group-[.toast]:bg-stone-100 group-[.toast]:text-stone-300',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
