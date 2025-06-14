import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Head from "next/head";

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Client Testimonials | Mirza Alamin Web Developer</title>
        <meta name="description" content="Read testimonials and reviews from clients who worked with Mirza Alamin on React, Next.js, and WordPress projects." />
        <meta name="keywords" content="Client Reviews, Testimonials, Mirza Alamin, Web Developer Feedback, React Projects, Next.js Work, WordPress Clients" />


        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>

      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* titile  */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 mb-8 xl:mb-0">What clients <span className="text-accent">say.</span></motion.h2>
          {/* slider  */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </>

  )
};

export default Testimonials;
