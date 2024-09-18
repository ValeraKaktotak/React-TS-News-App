import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

const buttonVariants = (variant: string) => {
  switch (variant) {
    case 'default': {
      return 'bg-primary hover:shadow-primary-md'
    }
    case 'disabled': {
      return 'bg-gray-400 pointer-events-none'
    }
    case 'outline': {
      return 'bg-transparent'
    }
    default:
      return ''
  }
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  text?: string
  variant?: 'default' | 'disabled' | 'outline'
}

export const Button: FC<IButton> = ({
  className,
  type = 'button',
  text = 'Button text',
  variant = 'default'
}) => {
  const res = buttonVariants(variant)

  return (
    <button
      type={type}
      className={cn(
        'shadow-foreground-md inline-flex items-center justify-center whitespace-nowrap rounded-md p-2 text-sm font-medium shadow-md ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-[1px] disabled:pointer-events-none disabled:bg-gray-500 disabled:opacity-50',
        res,
        className
      )}
    >
      {text}
    </button>
  )
}
