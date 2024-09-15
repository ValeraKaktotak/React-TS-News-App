import { MoonIcon, SunIcon } from 'lucide-react'
import { useState, type FC } from 'react'

const ThemeToggler: FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.theme)

	//Added theme scheme
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}

	const setLight = () => {
		localStorage.theme = 'light'
		setTheme('light')
	}
	const setDark = () => {
		localStorage.theme = 'dark'
		setTheme('dark')
	}

	return (
		<div>
			<button
				onClick={() => (theme === 'light' ? setDark() : setLight())}
				className='h-[50px] w-[50px] rounded-full flex justify-center items-center'
			>
				<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
				<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			</button>
		</div>
	)
}
export default ThemeToggler
