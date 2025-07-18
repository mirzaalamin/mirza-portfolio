// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/tech-overflow-website.png',
          liveUrl: "https://tech-overflow-eosin.vercel.app/"
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          liveUrl: "#"
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          liveUrl: "#"
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          liveUrl: "#"
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          liveUrl: "#"
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          liveUrl: "#"
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          liveUrl: "#"
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          liveUrl: "#"
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowRight } from 'react-icons/bs'

// Swiper slyles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[350px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image  */}
                      <Image src={image.path} height={300} width={500} alt='' />
                      {/* Overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <a target='_blank' href={image.liveUrl}>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            {/* Icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;

