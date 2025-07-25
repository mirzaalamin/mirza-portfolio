import React, { useState } from "react";
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from "react-countup";
import Head from "next/head";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiExpress
} from "react-icons/si";

// Data (only store component references, no JSX)
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          FaHtml5,
          SiTailwindcss,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaNodeJs,
          SiExpress,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Think in a Redux way',
        stage: '2023',
      },
      {
        title: 'Reactive Accelerator',
        stage: '2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelance Web Developer',
        stage: '2018 - Present',
      },
      {
        title: 'Remote Developer - UK-Based Company',
        stage: 'Ongoing',
      },

    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (

    <>
      <Head>
        <title>About Mirza Alamin | Web Developer & Freelancer</title>
        <meta name="description" content="Learn more about Mirza Alamin, a passionate web developer with expertise in React, Next.js, and WordPress. Discover my journey, skills, and experience." />
        <meta name="keywords" content="About Mirza Alamin, Web Developer, Freelancer, Experience, Skills, Portfolio, Bangladesh Developer, React, Next.js, WordPress" />

        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>

      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        {/* avatar */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[220px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text  */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Captivating
              <span className="text-accent"> stories</span><br />
              birth magnificent design.
            </motion.h2>

            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              Since 2018, I&apos;ve been building digital solutions for agencies, startups, and brands — blending creativity with code to deliver real-world results.
            </motion.p>

            {/* Counters  */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex-1 flex xl:gap-x-6">
                {/* Experience  */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="tex-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={7} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                </div>
                {/* Clients  */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="tex-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={220} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
                </div>
                {/* Projects  */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="tex-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={420} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
                </div>

                {/* Award  */}
                <div className="relative flex-1">
                  <div className="tex-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Wining awards</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* infos  */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index]?.info.map((item, infoIndex) => (
                <div key={infoIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>

  )
};

export default About;
