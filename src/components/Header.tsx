import type { FC } from 'react'

//Components
import { Logo } from '@/components/common/Logo'
import { ThemeToggler } from '@/components/common/ThemeToggler'
import { ProfileButton } from './common/ProfileButton'
import { SearchComponent } from './common/SearchComponent'

export const Header: FC = () => {
  return (
    <section className='flex w-full items-center gap-10'>
      <Logo text='Orange News' className='text-primary' />
      <div className='flex flex-1 items-center justify-between gap-10'>
        <SearchComponent />
        <div className='flex items-center'>
          <ThemeToggler />
          <ProfileButton />
        </div>
      </div>
    </section>
  )
}
