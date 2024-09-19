import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Components
import { SidebarItem } from '@/components/common/SidebarItem'

interface ISidebar {
  className?: string
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
  return (
    <section
      className={cn(
        'sticky top-0 hidden h-[480px] flex-col gap-2 rounded-lg border border-primary bg-tertiary p-4',
        className
      )}
    >
      <h2>Hot 5 news ...</h2>
      <SidebarItem className='h-20' />
      <SidebarItem className='h-20' />
      <SidebarItem className='h-20' />
      <SidebarItem className='h-20' />
      <SidebarItem className='h-20' />
    </section>
  )
}
