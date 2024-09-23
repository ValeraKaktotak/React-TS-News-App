import { useEffect, type FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//import { fetchNews } from '@/store/reducers/ActionCreators'
import { fetchMockNews } from '@/store/reducers/NewsActionCreators'
import { useAppDispatch } from '@/store/store'

//Components
import { MainNewsBlock } from '@/components/common/MainNewsBlock'
import { Sidebar } from '@/components/common/Sidebar'

interface INewsBlock {
  className?: string
}

export const NewsBlock: FC<INewsBlock> = ({ className }) => {
  const dispatch = useAppDispatch()

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
      <MainNewsBlock />

      {/*Sidebar (latest news) */}
      <Sidebar />
    </section>
  )
}
