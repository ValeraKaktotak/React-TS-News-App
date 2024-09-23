import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Components
import { SidebarItem } from '@/components/common/SidebarItem'

//Selectors
import { getSidebarNews } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'
import { Skeleton } from './Skeleton'

interface ISidebar {
  className?: string
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
  const sidebarNews = useAppSelector(getSidebarNews)

  return (
    <section
      className={cn(
        'sticky top-0 hidden h-[480px] flex-col gap-2 rounded-lg border border-primary bg-tertiary p-4',
        className
      )}
    >
      {sidebarNews ? (
        <>
          {' '}
          <h2>Hot 5 news ...</h2>
          {sidebarNews &&
            sidebarNews.map((news, i) => (
              <SidebarItem key={i} className='h-20' newsData={news} />
            ))}
        </>
      ) : (
        <Skeleton spinnerSize='[50px]' className='h-full w-full' />
      )}
    </section>
  )
}
