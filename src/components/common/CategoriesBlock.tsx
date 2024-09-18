import type { FC } from 'react'

//Utils
import { cn } from '@/libs/utils'
import { Button } from './Button'

interface ICategoriesBlock {
  className?: string
}

export const CategoriesBlock: FC<ICategoriesBlock> = ({ className }) => {
  return (
    <div className={cn('mt-10 flex justify-center gap-10', className)}>
      <Button text='Category 1' />
      <Button variant='disabled' text='Category 1' />
      <Button variant='outline' text='Category 1' />
      <Button text='Category 1' />
      <Button text='Category 1' />
    </div>
  )
}
