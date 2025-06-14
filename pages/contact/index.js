import Circles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Mirza Alamin | Web Developer & Freelancer</title>
        <meta name="description" content="Get in touch with Mirza Alamin for web development services, project inquiries, or freelance collaboration opportunities." />
        <meta name="keywords" content="Contact Mirza Alamin, Web Developer Contact, Hire Freelancer, Web Development Inquiry, Project Collaboration, Bangladesh Developer" />
        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>

      <div className='h-full bg-primary/30'>
        <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
          {/* Text and form  */}
          <div className='flex flex-col w-full max-w-[700px]'>
            {/* Text  */}
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 text-center mb-12'>Let&apos;s <span className='text-accent'>connect.</span></motion.h2>
            {/* Form  */}
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='flex flex-1 flex-col w-full gap-6'>
              {/* input group  */}
              <div className='flex gap-x-6 w-full'>
                <input type="text" placeholder='Name' className='input' />
                <input type="email" placeholder='Email' className='input' />
              </div>
              <input type="text" placeholder='Subject' className='input' />
              <textarea placeholder='Message' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>

  )
};

export default Contact;
