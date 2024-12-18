import { IconTrendingUp, IconAdjustmentsHorizontal, IconStar } from '@tabler/icons-react';
import React from 'react';
import Diagram4 from '../assets/Diagram4.svg';
import { motion } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.6 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

const UseCase = () => {
  return (
    <div className='py-5 bg-[#f5f5ff]'>
      <div className='w-full flex flex-col items-center justify-center p-5 my-5'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>How OGI Helps You Achieve More</h1>
        <p>Unlock productivity, improve outcomes, and simplify operations with OGI.</p>
      </div>

      <motion.div
        className='flex flex-col lg:flex-row bg-gradient-to-r from-[#4143d0] to-[#870199] h-auto rounded-3xl w-[90%] mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='flex flex-col p-10 lg:p-24 gap-5 lg:gap-10 items-center justify-center w-full lg:w-8/12 h-auto'>
          {[
            { title: 'Increase Revenue', icon: <IconTrendingUp className='w-10 h-10 text-cyan-300' /> },
            { title: 'Optimize Operations', icon: <IconAdjustmentsHorizontal className='w-10 h-10 text-cyan-300' /> },
            { title: 'Improve Experience', icon: <IconStar className='w-10 h-10 text-cyan-300' /> },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className='flex items-center gap-3 lg:gap-5'
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className='hidden lg:flex bg-gradient-to-t from-[#6c64d9] to-[#5d54d2] p-5 rounded-xl'
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>
              <motion.div
                className='text-white flex flex-col gap-1'
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className='text-lg lg:text-2xl font-semibold'>{item.title}</p>
                <p className='text-sm lg:text-base'>
                  {item.title === 'Increase Revenue'
                    ? 'Automating workflows to increase efficiency, enabling employees to focus on strategies that directly boost revenue.'
                    : item.title === 'Optimize Operations'
                    ? 'OGI dynamically streamlines processes, cutting out inefficiencies and accelerating task execution through intelligent automation.'
                    : 'OGI improves the user experience by offering immediate, customized support that enhances overall satisfaction.'}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className='w-full lg:w-5/12 h-full lg:flex hidden'>
          <motion.img
            className='object-cover w-[80%] shimmer-effect'
            src={Diagram4}
            alt='Diagram'
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default UseCase;
