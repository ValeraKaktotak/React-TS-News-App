import type { FC } from 'react'

//Components
import Logo from '@/components/common/Logo'
import ThemeToggler from '@/components/common/ThemeToggler'

export const Header: FC = () => {
	return (
		<section className='flex w-full items-center'>
			<Logo text='My News' className='text-primary' />
			<div className='flex items-center'>
				<ThemeToggler />
				<div>Login</div>
			</div>
		</section>
	)
}
