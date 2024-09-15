import { MoonIcon, SunIcon } from 'lucide-react'
import { useState, type FC } from 'react'

const ThemeToggler: FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	return (
		<div>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='h-[50px] w-[50px] rounded-full'
			>
				<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
				<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			</button>
		</div>
	)
}
export default ThemeToggler
