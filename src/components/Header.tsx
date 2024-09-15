import type { FC } from 'react'

//Components
import Logo from '@/components/common/Logo'
import ThemeToggler from './common/ThemeToggler'

const Header: FC = () => {
	return (
		<section className='flex w-full items-center'>
			<Logo text='My News' />
			<div className='flex items-center'>
				<ThemeToggler />
				<div>Login</div>
			</div>
		</section>
	)
}
export default Header
