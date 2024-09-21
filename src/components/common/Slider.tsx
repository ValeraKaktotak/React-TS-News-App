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

interface ISlider {
  className?: string
}

export const Slider: FC<ISlider> = ({ className }) => {
  return (
    <div
      className={cn(
        'mt-10 rounded-md border border-primary bg-tertiary',
        className
      )}
    >
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
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <SliderItem fetchedUrl={`bg-[url('@/assets/images/no-image.png')]`} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
