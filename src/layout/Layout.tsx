import { type FC } from 'react'

//Components
import { Header } from '@/components/Header'

type ILayout = {
  children: React.ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='app m-auto min-h-screen w-full max-w-[1200px] bg-mainBackground p-6 text-foreground transition-colors duration-500 ease-in-out'>
      <Header />
      {children}
    </div>
  )
}
