// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'stefanevertz',
    position: 'Client',
    message:
      'He did a great job. We had a super short deadline with a website project and helped us finishing it in time. Thanks a lot.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Tim',
    position: 'Client',
    message:
      "The level of professionalism is superb as always with Mirza. You can be confident he'll get the job done right. 🙂",
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react'
import { FaQuoteLeft } from 'react-icons/fa'

// Swiper slyles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar name position  */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar  */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} height={100} width={100} alt='client-image' />
                  </div>
                  {/* name  */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position  */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* Quote and message  */}
              <div className='flex flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* icon  */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message  */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;
