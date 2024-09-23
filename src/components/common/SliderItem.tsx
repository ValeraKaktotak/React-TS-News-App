import type { FC } from 'react'

//Images
import noImage from '@/assets/images/no-image.png'

//Utils
import { cn } from '@/libs/utils'

interface ISliderItem {
  className?: string
  customText?: string
  fetchedUrl?: string | null
}

export const SliderItem: FC<ISliderItem> = ({ className, fetchedUrl }) => {
  const backgroundImageUrl = fetchedUrl || noImage
  return (
    <div className={cn('h-full w-full', className)}>
      <div
        className={`h-full w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
    </div>
  )
}
