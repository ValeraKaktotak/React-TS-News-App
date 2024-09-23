import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

//Components
import { Button } from '@/components/common/Button'

//Images
import noImage from '@/assets/images/no-image.png'

//Types
import { ISingleNews } from '@/types/news-types'

interface INewsItem {
  className?: string
  newsData: ISingleNews
}

export const NewsItem: FC<INewsItem> = ({ className, newsData }) => {
  const { image, title } = newsData
  const backgroundImageUrl = image || noImage

  return (
    <article
      className={cn(
        'relative h-[250px] overflow-hidden rounded-lg border border-primary bg-cover bg-center',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className='absolute bottom-0 left-0 right-0 top-[55%] flex flex-col justify-between bg-gray-500/70 p-2'>
        <p className='line-clamp-2'>{title}</p>
        <Link to='#' className='w-24'>
          <Button text='Read more' />
        </Link>
      </div>
    </article>
  )
}
