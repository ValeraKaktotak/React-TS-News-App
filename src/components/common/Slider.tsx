import type { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//Utils
import { cn } from '@/libs/utils'

//Components
import { SliderItem } from '@/components/common/SliderItem'

//Selectors
import { getSliderNews } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'
import { Skeleton } from './Skeleton'

interface ISlider {
  className?: string
}

export const Slider: FC<ISlider> = ({ className }) => {
  const sliderNews = useAppSelector(getSliderNews)

  return (
    <div
      className={cn(
        'mt-10 rounded-md border border-primary bg-tertiary',
        className
      )}
    >
      {sliderNews ? (
        <Swiper
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active'
          }}
          autoplay={{
            delay: 4000,
            stopOnLastSlide: false
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            440: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            }
          }}
          className='mySwiper h-60 cursor-pointer p-4 pb-10 text-white'
        >
          {sliderNews &&
            sliderNews?.length > 0 &&
            sliderNews.map((news, i) => (
              <SwiperSlide key={i} className='flex justify-center'>
                <SliderItem fetchedUrl={news.image} title={news.title} />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Skeleton spinnerSize='[50px]' className='h-[240px] w-full' />
      )}
    </div>
  )
}
