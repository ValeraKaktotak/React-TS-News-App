import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Components
import { NewsItem } from './NewsItem'
import { Sidebar } from './Sidebar'

interface INewsBlock {
  className?: string
}

export const NewsBlock: FC<INewsBlock> = ({ className }) => {
  return (
    <section
      className={cn(
        'mt-10 grid grid-cols-1 gap-5 md:grid-cols-[1fr,250px]',
        className
      )}
    >
      {/*Main news block */}
      <div className='grid grid-cols-2 gap-4 rounded-lg border border-primary bg-tertiary p-4'>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      {/*Sidebar (latest news) */}
      <Sidebar className='md:flex' />
    </section>
  )
}
