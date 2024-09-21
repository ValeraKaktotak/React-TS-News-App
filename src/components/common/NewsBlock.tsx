import { useEffect, type FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//State
//import { fetchNews } from '@/store/reducers/ActionCreators'
import { fetchMockNews } from '@/store/reducers/NewsActionCreators'
import { useAppDispatch, useAppSelector } from '@/store/store'

//Components
import { NewsItem } from './NewsItem'
import { Sidebar } from './Sidebar'

interface INewsBlock {
  className?: string
}

export const NewsBlock: FC<INewsBlock> = ({ className }) => {
  const { news, isLoading, error } = useAppSelector(
    (state) => state.newsReducer
  )
  const dispatch = useAppDispatch()

  console.log(news, 'isLoading - ' + isLoading)

  useEffect(() => {
    //only 500 real requests
    //dispatch(fetchNews())

    //mock data
    dispatch(fetchMockNews())
  }, [dispatch])

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
