import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'
import { useAppSelector } from '@/store/store'
import { Button } from './Button'

interface ICategoriesBlock {
  className?: string
}

export const CategoriesBlock: FC<ICategoriesBlock> = ({ className }) => {
  const { categories } = useAppSelector((state) => state.newsReducer)
  console.log(categories)

  return (
    <div
      className={cn('mt-10 flex flex-wrap justify-center gap-10', className)}
    >
      {Object.entries(categories).map(([key]) => (
        <Button key={key} text={key} />
      ))}
    </div>
  )
}
