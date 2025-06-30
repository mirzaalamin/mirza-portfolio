import WorkSlider from '../../components/WorkSlider'
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Head from 'next/head'


const Work = () => {
  return (
    <>
      <Head>
        <title>Portfolio & Recent Work | Mirza Alamin Web Developer</title>
        <meta name="description" content="Explore the recent projects and portfolio of Mirza Alamin, showcasing React, Next.js, and WordPress development work." />
        <meta name="keywords" content="Portfolio, Projects, Web Development Work, React Projects, Next.js Portfolio, WordPress Websites, Bangladesh Developer, Freelance Work" />


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
                className='h2 xl:mt-12'>My Work<span className='text-accent'>.</span></motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>A showcase of projects where ideas turned into impactful digital experiences — built with precision, creativity, and code.</motion.p>
            </div>
            {/* Slider  */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='w-full xl:max-w-[65%]'>
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>

  )
};

export default Work;
