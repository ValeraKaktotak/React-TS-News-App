import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

//Types
import type { ISingleNews } from '@/types/news-types'

//Images
import noImage from '@/assets/images/no-image.png'

interface ISidebarItem {
  className?: string
  newsData: ISingleNews
}

export const SidebarItem: FC<ISidebarItem> = ({ className, newsData }) => {
  const { image, title } = newsData
  const backgroundImageUrl = image || noImage

  return (
    <Link
      to='#'
      className={cn(
        'relative overflow-hidden rounded-lg border border-primary bg-cover bg-center',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className='group h-full w-full bg-gray-500/70 transition-all duration-500 hover:bg-transparent'>
        <p className='absolute left-0 top-1/2 line-clamp-1 -translate-y-1/2 px-2 transition-all duration-500 group-hover:opacity-0'>
          {title}
        </p>
      </div>
    </Link>
  )
}
