import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

interface ISliderItem {
  className?: string
  customText?: string
  fetchedUrl?: string
}

export const SliderItem: FC<ISliderItem> = ({ className, fetchedUrl }) => {
  return (
    <div className={cn('h-full w-full', className)}>
      <div className={`${fetchedUrl} h-full w-full bg-cover bg-center`}></div>
    </div>
  )
}
