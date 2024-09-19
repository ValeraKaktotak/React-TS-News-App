import { CircleUser, Loader, User } from 'lucide-react'
import { FC, useState } from 'react'

//Libs
import { Link } from 'react-router-dom'

//Components
import { Button } from '@/components/common/Button'

export const ProfileButton: FC = () => {
  const [isLogin, setIsLogin] = useState<
    'unauthenticated' | 'authenticated' | 'loading'
  >('unauthenticated')

  const onClickSignIn = () => {
    setIsLogin('loading')
    setTimeout(() => {
      setIsLogin(
        isLogin === 'unauthenticated' ? 'authenticated' : 'unauthenticated'
      )
    }, 2000)
    console.log(isLogin)
  }

  return (
    <>
      {isLogin === 'unauthenticated' ? (
        <Button
          onClick={onClickSignIn}
          className='flex h-10 w-[105px] items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium'
        >
          <User size={16} /> Login
        </Button>
      ) : isLogin === 'authenticated' ? (
        <Link to='#'>
          <Button className='flex h-10 w-[105px] items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium'>
            <CircleUser size={18} />
            Profile
          </Button>
        </Link>
      ) : (
        <Button
          variant='disabled'
          className='flex h-10 w-[105px] items-center justify-center rounded-md px-4 py-2'
        >
          <Loader className='h-5 w-5 animate-spin' />
        </Button>
      )}
    </>
  )
}
