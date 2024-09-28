import type { FC } from 'react'

//Components
import { Logo } from '@/components/common/Logo'
import { ThemeToggler } from '@/components/common/ThemeToggler'
import { Link } from 'react-router-dom'
import { Button } from './common/Button'
import { SearchComponent } from './common/SearchComponent'

export const Header: FC = () => {
  return (
    <section className='grid grid-cols-1 items-center justify-items-center gap-[5%] md:grid-cols-[20%_50%_20%] md:justify-items-start'>
      <Logo text='Orange News' className='text-primary' />
      <SearchComponent />
      <div className='flex items-center'>
        <Link to='/contact'>
          <Button>Contact us</Button>
        </Link>
        <ThemeToggler />
      </div>
    </section>
  )
}
