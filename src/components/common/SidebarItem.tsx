import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

interface ISidebarItem {
  className?: string
  img?: string
  title?: string
}

export const SidebarItem: FC<ISidebarItem> = ({ className, img, title }) => {
  if (!img) {
    img = '@/assets/images/no-image.png'
  }
  const bgImg = `bg-[url('${img}')]`

  return (
    <Link
      to='#'
      className={cn(
        'relative overflow-hidden rounded-lg border border-primary bg-cover bg-center',
        bgImg,
        className
      )}
    >
      <div className='group h-full w-full bg-gray-500/70 transition-all duration-500 hover:bg-transparent'>
        <p className='absolute left-0 top-1/2 line-clamp-1 -translate-y-1/2 px-2 transition-all duration-500 group-hover:opacity-0'>
          {title}
        </p>
      </div>
    </Link>
  )
}
