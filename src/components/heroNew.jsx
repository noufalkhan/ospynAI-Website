import React from 'react';
import { motion } from 'framer-motion';
import frontAvatar from '../assets/frontAvatar.png';
import HexagonBackground from '../assets/HexagonBackground.svg';

// Define animation variants for button interactions
const buttonVariants = {
  rest: {
    scale: 1,
    backgroundColor: '#4144d3',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid transparent',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.05,
    backgroundColor: '#6366f1',
    boxShadow: '0px 0px 12px rgba(99, 102, 241, 0.8)', // Glowing effect
    border: '2px solid rgba(99, 102, 241, 0.8)', // Glowing border
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  tap: {
    scale: 0.95,
    backgroundColor: '#3b82f6',
    transition: { duration: 0.1, ease: 'easeInOut' },
  },
};

const subtleStaggerChildren = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: 'easeInOut',
    },
  },
};

const subtleFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const HeroNew = () => {
  const handleClick = () => {
    window.open('https://thebigdatainsights.com/contact-us', '_blank');
  };

  return (
    <>
      {/* Main container with gradient background */}
      <div className='w-full pt-16 bg-gradient-to-r from-[#eee6ff] via-transparent to-[#ffe2f9]'>
        
        {/* Content container with hexagon background */}
        <div
          className='h-auto xl:h-full  container mx-auto flex flex-col md:flex-row sm:px-10y lg:pl-10'
          style={{
            backgroundImage: `url(${HexagonBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          
          {/* Text and description section */}
          <motion.div
            className='h-auto md:h-full w-full pt-10 pb-5 flex flex-col items-center md:items-start lg:mt-28  lg:pl-10'
            initial='hidden'
            animate='visible'
            variants={subtleStaggerChildren}
          >
            {/* Heading and subheading with subtle fade-in effect */}
            <motion.p className='text-gray-800 md:text-3xl  ' variants={subtleFadeIn}>
              Revolutionize Your Business with
            </motion.p>
            <motion.h1 className='text-4xl md:text-7xl  text-black text-center md:text-start font-bold' variants={subtleFadeIn}><span className='text-[#493aca]'>AI</span> Powered Process Automation!
            </motion.h1>
            <motion.p className='text-black text-base w-3/4 md:w-full text-center md:text-start  my-2 md:my-5' variants={subtleFadeIn}>
            Lead with confidence by transforming uncertainty into an advantage through laser-focused, Gen-AI-powered process optimization.
            </motion.p>
        

            {/* Animated Button with glowing border */}
            <motion.div
              variants={subtleFadeIn}
              className=''
            >
              <motion.button
                className='bg-[#4144d3] px-6 py-4 rounded-lg text-white text-sm font-semibold tracking-wide'
                variants={buttonVariants}
                initial='rest'
                whileHover='hover'
                whileTap='tap'
                onClick={handleClick}
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </motion.div>
         
          {/* Image section (visible on large screens) */}
          <motion.div
            className='h-auto md:h-full w-full flex flex-col items-center justify-end sm:hidden lg:flex mt-5 md:mt-20'
            initial='hidden'
            animate='visible'
            variants={subtleFadeIn}
          >
            <motion.img
              className='object-cover w-[60%] md:w-[60%] lg:w-[60%] xl:w-[80%]'
              src={frontAvatar}
              alt='Front Avatar'
              variants={subtleFadeIn}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroNew;
