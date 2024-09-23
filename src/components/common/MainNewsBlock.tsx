import type { FC } from 'react'
import { NewsItem } from './NewsItem'

//Utils
import { cn } from '@/libs/utils'
import { getNewsSelector } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'
import { Skeleton } from './Skeleton'

interface IMainNewsBlock {
  className?: string
}

export const MainNewsBlock: FC<IMainNewsBlock> = ({ className }) => {
  const newsData = useAppSelector(getNewsSelector)
  return (
    <div
      className={cn(
        className,
        'rounded-lg border border-primary bg-tertiary p-4'
      )}
    >
      {newsData ? (
        <div className='grid grid-cols-2 gap-4'>
          {newsData.data.map((news, i) => (
            <NewsItem key={i} newsData={news} />
          ))}
        </div>
      ) : (
        <Skeleton spinnerSize='32' className='h-full w-full' />
      )}
    </div>
  )
}
