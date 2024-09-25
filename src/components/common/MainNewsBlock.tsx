import { useEffect, useState, type FC } from 'react'
import { NewsItem } from './NewsItem'

//Utils
import { cn } from '@/libs/utils'

//Types

//Store
import {
  getNewsBlockSelector,
  isLoadedSelector
} from '@/store/reducers/NewsSelectors'
import { useAppDispatch, useAppSelector } from '@/store/store'

//Component
import { Skeleton } from '@/components/common/Skeleton'
import { fetchNewsBlock } from '@/store/reducers/NewsActionCreators'

interface IMainNewsBlock {
  className?: string
}

export const MainNewsBlock: FC<IMainNewsBlock> = ({ className }) => {
  const dispatch = useAppDispatch()
  const newsBlockData = useAppSelector(getNewsBlockSelector)
  const isDataLoaded = useAppSelector(isLoadedSelector)
  const [pageIndex, setPageIndex] = useState<number>(0)

  const scrollHandler = (e: Event) => {
    const target = e.target as Document
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      pageIndex < 10
    ) {
      setPageIndex((current) => current + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    dispatch(fetchNewsBlock(pageIndex))
  }, [dispatch, pageIndex, isDataLoaded])

  return (
    <div
      className={cn(
        className,
        'rounded-lg border border-primary bg-tertiary p-4'
      )}
    >
      {newsBlockData && newsBlockData.length > 0 ? (
        <div className='grid grid-cols-2 gap-4'>
          {newsBlockData.map((news, i) => (
            <NewsItem key={i} newsData={news} />
          ))}
        </div>
      ) : (
        <Skeleton spinnerSize='[50px]' className='h-full w-full' />
      )}
    </div>
  )
}
