import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Store
import { useAppSelector } from '@/store/store'

//Components
import { getCategories } from '@/store/reducers/NewsSelectors'
import { Button } from './Button'
import { Skeleton } from './Skeleton'

interface ICategoriesBlock {
  className?: string
}

export const CategoriesBlock: FC<ICategoriesBlock> = ({ className }) => {
  const categories = useAppSelector(getCategories)
  console.log(categories)

  return (
    <div
      className={cn('mt-10 flex flex-wrap justify-center gap-10', className)}
    >
      {categories ? (
        Object.entries(categories).map(([key]) => (
          <Button key={key} text={key} />
        ))
      ) : (
        <Skeleton spinnerSize='8' className='h-9 w-full max-w-[800px]' />
      )}
    </div>
  )
}
