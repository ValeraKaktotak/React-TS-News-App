import { Search } from 'lucide-react'
import { useRef, useState, type FC } from 'react'
import { Link } from 'react-router-dom'
import { useClickAway, useDebounce } from 'react-use'

//Utils
import { cn } from '@/libs/utils'

//Images
import noImage from '@/assets/images/no-image.png'

//Types
import { getSearchNews } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'

interface ISearchComponent {
  className?: string
}

export const SearchComponent: FC<ISearchComponent> = ({ className }) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('')
  const searchedNews = useAppSelector(getSearchNews(debouncedSearchQuery))

  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
  }

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery)
    },
    300,
    [searchQuery]
  )

  return (
    <>
      {focused && <div className='fixed inset-0 z-30 bg-black/50'></div>}
      <div
        ref={ref}
        className={cn(
          className,
          'relative z-30 flex h-11 flex-1 justify-between rounded-2xl'
        )}
      >
        <Search className='absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-800' />
        <input
          className='w-full rounded-2xl bg-gray-400 pl-11 pr-5 text-black placeholder-gray-800 outline-none'
          type='text'
          placeholder='Search news...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />

        {searchedNews && searchedNews?.length > 0 && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full rounded-xl bg-white py-2 opacity-0 shadow-md transition-all duration-200',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {searchedNews.map((news, i) => (
              <Link
                key={i}
                to={`/news/${news.title}`}
                className='hover:bg-primary/20 flex w-full items-center gap-3 px-3 py-2 text-[#0c0a09]'
                onClick={onClickItem}
              >
                <img
                  className='h-8 w-8 rounded-sm'
                  src={news.image || noImage}
                  alt={news.title}
                />
                <span>{news.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
