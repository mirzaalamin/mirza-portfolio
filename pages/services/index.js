import ServiceSlider from '../../components/ServiceSlider'
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Head from 'next/head'

const Services = () => {
  return (

    <>
      <Head>
        <title>Web Development Services | Mirza Alamin</title>
        <meta name="description" content="Offering professional web development services including React, Next.js, WordPress development, frontend, backend, and full stack solutions." />
        <meta name="keywords" content="Web Development Services, React Developer, Next.js Services, WordPress Development, Full Stack Development, Freelance Web Developer, Bangladesh" />


        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>

      <div className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* Text  */}
            <div className='flex text-center xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='h2 xl:mt-8'>My Services<span className='text-accent'>.</span></motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. nulla ipsa ex, eligendi.</motion.p>
            </div>
            {/* Slider  */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='w-full xl:max-w-[65%]'>
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>

  )
};

export default Services;
