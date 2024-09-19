import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Components
import { Link } from 'react-router-dom'
import { Button } from './Button'

interface INewsItem {
  className?: string
  title?: string
  img?: string
}

export const NewsItem: FC<INewsItem> = ({
  className,
  img,
  title = 'Without title'
}) => {
  if (!img) {
    img = '@/assets/images/no-image.png'
  }
  const bgImg = `bg-[url('${img}')]`

  return (
    <article
      className={cn(
        'relative h-[250px] overflow-hidden rounded-lg border border-primary bg-cover bg-center',
        bgImg,
        className
      )}
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
