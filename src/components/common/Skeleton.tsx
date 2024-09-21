import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'
import { Loader } from 'lucide-react'

interface ISkeleton {
  className?: string
  spinnerSize?: string
}

export const Skeleton: FC<ISkeleton> = ({ className, spinnerSize = '5' }) => {
  return (
    <div
      className={cn(
        'flex animate-pulse items-center justify-center rounded-lg bg-gray-400',
        className
      )}
    >
      <Loader className={`h-${spinnerSize} w-${spinnerSize} animate-spin`} />
    </div>
  )
}
