import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

//Store
import { getCategories } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'

//Components
import { Button } from '@/components/common/Button'
import { Skeleton } from '@/components/common/Skeleton'

interface ICategoriesBlock {
  className?: string
}

export const CategoriesBlock: FC<ICategoriesBlock> = ({ className }) => {
  const categories = useAppSelector(getCategories)

  return (
    <div
      className={cn('mt-10 flex flex-wrap justify-center gap-10', className)}
    >
      {categories ? (
        Object.entries(categories).map(([key]) => (
          <Link key={key} to='#'>
            <Button text={key} />
          </Link>
        ))
      ) : (
        <Skeleton spinnerSize='8' className='h-9 w-full max-w-[800px]' />
      )}
    </div>
  )
}
