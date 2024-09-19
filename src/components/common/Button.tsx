import type { FC, ReactNode } from 'react'

//Utils
import { cn } from '@/libs/utils'
import React from 'react'

const buttonVariants = (variant: string) => {
  switch (variant) {
    case 'default': {
      return 'shadow-foreground-md bg-primary hover:shadow-primary-md'
    }
    case 'disabled': {
      return 'bg-gray-400 pointer-events-none'
    }
    case 'outline': {
      return 'shadow-foreground-md bg-transparent'
    }
    default:
      return ''
  }
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: VoidFunction
  type?: 'button' | 'submit' | 'reset'
  text?: string
  variant?: 'default' | 'disabled' | 'outline'
  children?: ReactNode
}

export const Button: FC<IButton> = ({
  className,
  children,
  onClick,
  type = 'button',
  text = 'Button text',
  variant = 'default',
  ...props
}) => {
  const res = buttonVariants(variant)

  return (
    <button
      type={type}
      className={cn(
        'duration-400 inline-flex items-center justify-center whitespace-nowrap rounded-md p-2 text-sm font-medium shadow-md ring-offset-background transition-all active:translate-y-[1px]',
        res,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {!children && text}
      {children}
    </button>
  )
}
