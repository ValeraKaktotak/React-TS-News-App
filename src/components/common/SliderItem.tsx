import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Images
import noImage from '@/assets/images/no-image.png'

//Utils
import { cn } from '@/libs/utils'

interface ISliderItem {
  className?: string
  title?: string
  fetchedUrl?: string | null
}

export const SliderItem: FC<ISliderItem> = ({
  className,
  fetchedUrl,
  title = 'title'
}) => {
  const backgroundImageUrl = fetchedUrl || noImage
  return (
    <Link
      to={`/news/${title}`}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-lg border border-primary bg-cover bg-center',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className='group h-full w-full bg-gray-500/70 transition-all duration-500 hover:bg-transparent'>
        <p className='absolute left-0 top-1/2 line-clamp-3 -translate-y-1/2 px-2 transition-all duration-500 group-hover:opacity-0'>
          {title}
        </p>
      </div>
    </Link>
  )
}
