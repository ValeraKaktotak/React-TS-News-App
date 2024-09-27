import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'

//Store
import { getCategories } from '@/store/reducers/NewsSelectors'
import { useAppDispatch, useAppSelector } from '@/store/store'

//Components
import { Button } from '@/components/common/Button'
import { Skeleton } from '@/components/common/Skeleton'
import { fetchCategoryNewsBlock } from '@/store/reducers/NewsActionCreators'

interface ICategoriesBlock {
  className?: string
}

export const CategoriesBlock: FC<ICategoriesBlock> = ({ className }) => {
  const categories = useAppSelector(getCategories)
  const dispatch = useAppDispatch()

  const clickHandler = (query: string) => {
    dispatch(fetchCategoryNewsBlock(query))
  }

  return (
    <div
      className={cn('mt-10 flex flex-wrap justify-center gap-10', className)}
    >
      {categories ? (
        <div className='flex flex-nowrap gap-4'>
          <Button
            onClick={() => {
              clickHandler('')
            }}
            text='All'
            className='min-w-20'
          />
          {Object.entries(categories).map(([key]) => (
            <Button
              onClick={() => {
                clickHandler(key)
              }}
              className='min-w-20 capitalize'
              key={key}
              text={key}
            />
          ))}
        </div>
      ) : (
        <Skeleton spinnerSize='8' className='h-9 w-full max-w-[800px]' />
      )}
    </div>
  )
}
