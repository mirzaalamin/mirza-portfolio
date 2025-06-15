import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Head from 'next/head'





const Home = () => {
  return (
    <>
      <Head>
        <title>Mirza Alamin | Web Developer - React, Next.js & WordPress Specialist</title>
        <meta name="description" content="I’m Mirza Alamin, a passionate web developer specializing in React, Next.js, and WordPress. Explore my portfolio, projects, and contact me for collaborations or freelance work." />
        <meta name="keywords" content="Mirza Alamin, Web Developer, React Developer, Next.js Developer, WordPress Developer, Frontend Developer, Full Stack Developer, Portfolio, Freelance Web Developer, Bangladesh Developer" />
        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>

      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
            {/* title */}
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1">Transforming ideas <br /> Into {' '} <span className='text-accent'>
                Digital Reality
              </span></motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt quod dolores tenetur porro soluta. Aliquam voluptatem corrupti eveniet odio?</motion.p>
            {/* button */}
            <div className="flex justify-center xl:hidden relative z-10">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat h-full w-full absolute mix-blend-color-dodge">

          </div>
          {/* Particles */}
          <ParticlesContainer />
          {/* Avatar */}
          <motion.div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>

  )
};

export default Home;
