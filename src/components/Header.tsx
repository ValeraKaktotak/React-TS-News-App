import type { FC } from 'react'

//Components
import { Logo } from '@/components/common/Logo'
import { ThemeToggler } from '@/components/common/ThemeToggler'
import { Link } from 'react-router-dom'
import { Button } from './common/Button'
import { SearchComponent } from './common/SearchComponent'

export const Header: FC = () => {
  return (
    <section className='flex w-full items-center gap-10'>
      <Logo text='Orange News' className='text-primary' />
      <div className='flex flex-1 items-center justify-between gap-10'>
        <SearchComponent />
        <div className='flex items-center'>
          <ThemeToggler />
          <Link to='/contact'>
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
