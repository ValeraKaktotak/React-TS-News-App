import { type FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Components
import { MainNewsBlock } from '@/components/common/MainNewsBlock'
import { Sidebar } from '@/components/common/Sidebar'

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
      <MainNewsBlock />

      {/*Sidebar (latest news) */}
      <Sidebar />
    </section>
  )
}
