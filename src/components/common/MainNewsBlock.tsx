import { useEffect, useState, type FC } from 'react'
import { NewsItem } from './NewsItem'

//Utils
import { cn } from '@/libs/utils'

//Store
import {
  getNewsSelector,
  getPaginationBlockNews
} from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'

//Component
import { Skeleton } from '@/components/common/Skeleton'
import { Button } from './Button'

interface IMainNewsBlock {
  className?: string
}

export const MainNewsBlock: FC<IMainNewsBlock> = ({ className }) => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [scrollUp, setScrollUp] = useState<boolean>(false)
  const newsBlockData = useAppSelector(getPaginationBlockNews(pageIndex))
  const newsData = useAppSelector(getNewsSelector)

  const upHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollHandler = (e: Event) => {
    const target = e.target as Document
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setPageIndex((current) => current + 1)
    }

    if (target.documentElement.scrollTop > window.innerHeight / 2) {
      setScrollUp(true)
    }
    if (target.documentElement.scrollTop < window.innerHeight / 2) {
      setScrollUp(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div
      className={cn(
        className,
        'rounded-lg border border-primary bg-tertiary p-4'
      )}
    >
      {newsBlockData && newsData && newsBlockData.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {newsBlockData.map((news, i) => (
            <NewsItem key={i} newsData={news} />
          ))}
        </div>
      ) : newsData && newsBlockData.length === 0 ? (
        <div>News not found :(</div>
      ) : (
        <Skeleton spinnerSize='[50px]' className='h-full w-full' />
      )}
      {scrollUp && (
        <Button
          onClick={upHandler}
          className='fixed bottom-10 right-10 h-20 w-20 rounded-full'
        >
          Up
        </Button>
      )}
    </div>
  )
}
