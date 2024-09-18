import type { FC } from 'react'

//Components
import { CategoriesBlock } from '@/components/common/CategoriesBlock'
import { Slider } from '@/components/common/Slider'

const Home: FC = () => {
  return (
    <>
      <CategoriesBlock />
      <Slider />
    </>
  )
}

export default Home
