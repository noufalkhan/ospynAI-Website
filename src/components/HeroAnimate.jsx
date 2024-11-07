import React from 'react';
import { motion } from 'framer-motion';

const subtleFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const floatAnimation = {
  initial: { y: 0, opacity: 0.3, rotate: 0 },
  animate: {
    y: [0, 25, 0],
    opacity: [0.3, 0.5, 0.3],
    rotate: [0, 10, 0], // Subtle rotation to add depth
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  whileHover: { scale: 1.1, opacity: 0.7 }, // Hover scale effect
};

const glowTextAnimation = {
  hidden: { filter: 'blur(5px)', opacity: 0 },
  visible: {
    filter: 'blur(0)',
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
  rest: { opacity: 1, scale: 1 },
  hover: { scale: 1.1, opacity: 0.8 },
  tap: { scale: 0.95, opacity: 1 },
};

const HeroAnimate = () => {
  const handleClick = () => {
    // Opens the contact page in a new tab
    window.open('https://thebigdatainsights.com/contact-us', '_blank');
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#f5f5ff] via-[#f9f9f9] to-[#e3e3ff] flex items-center justify-center relative overflow-hidden">
      {/* Background Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-blue-200 rotate-45"
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} // Triangle shape
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.15, rotate: 15 }} // Hover scale and rotate effect
      />
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 bg-purple-200 rounded-lg shadow-lg"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.2, opacity: 0.8 }} // Hover scale and opacity effect
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-300 rounded-full opacity-60"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.3, opacity: 0.9 }} // Hover scale effect
      />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center px-5 md:px-10 lg:px-20 max-w-4xl space-y-6"
      >
        <motion.p
          className="text-gray-700 text-xl md:text-3xl tracking-wide font-semibold"
          variants={subtleFadeIn}
        >
          Revolutionize Your Business with
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl text-gray-900 font-bold"
          variants={subtleFadeIn}
        >
          <motion.span
            className="text-[#493aca] drop-shadow-lg "
            variants={glowTextAnimation} // Glow effect on AI
            whileHover={{
              scale: 1.05,
              textShadow: '0px 0px 15px rgba(73, 58, 202, 1)', // Hover text shadow effect
            }}
          >
            AI&nbsp;
          </motion.span>
          Powered Process Automation!
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl lg:text-2xl w-full md:w-3/4 lg:w-full mx-auto leading-relaxed my-2 md:my-5"
          variants={subtleFadeIn}
        >
          Lead with confidence by transforming uncertainty into an advantage through laser-focused, Gen-AI-powered process optimization.
        </motion.p>

        <motion.button
          className="bg-[#4144d3] px-6 py-4 rounded-lg text-white text-sm font-semibold tracking-wide"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={handleClick}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroAnimate;
