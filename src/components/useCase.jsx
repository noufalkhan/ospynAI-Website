import { IconTrendingUp, IconAdjustmentsHorizontal, IconStar } from '@tabler/icons-react';
import React from 'react';
import Diagram4 from '../assets/Diagram4.svg';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const UseCase = () => {
  return (
    <div className='py-5 bg-[#f5f5ff]'>
      <div className='w-full flex flex-col items-center justify-center p-5 my-10'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>How OGI Helps You Achieve More</h1>
        <p>Unlock productivity, improve outcomes, and simplify operations with OGI.</p>
      </div>

      <div className='flex bg-gradient-to-r from-[#4143d0] to-[#870199] h-auto rounded-3xl w-[90%] mx-auto'>
        <div className='flex flex-col p-24 gap-10 items-center justify-center w-full lg:w-8/12 h-auto'>
          {/* Sections with staggered animation */}
          {[
            { title: 'Increase Revenue', icon: <IconTrendingUp className='w-10 h-10 text-cyan-300' /> },
            { title: 'Optimize Operations', icon: <IconAdjustmentsHorizontal className='w-10 h-10 text-cyan-300' /> },
            { title: 'Improve Experience', icon: <IconStar className='w-10 h-10 text-cyan-300' /> },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className='flex items-center gap-3'
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }} // Trigger only the first time in view
            >
              <div className='bg-gradient-to-t from-[#6c64d9] to-[#5d54d2] p-5 rounded-xl'>
                {item.icon}
              </div>
              <div className='text-white flex flex-col gap-1'>
                <p className='text-2xl font-semibold'>{item.title}</p>
                <p>
                  {item.title === 'Increase Revenue'
                    ? 'Automating workflows to increase efficiency, enabling employees to focus on strategies that directly boost revenue.'
                    : item.title === 'Optimize Operations'
                    ? 'OGI dynamically streamlines processes, cutting out inefficiencies and accelerating task execution through intelligent automation.'
                    : 'OGI improves the user experience by offering immediate, customized support that enhances overall satisfaction.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='w-5/12 h-full lg:flex hidden'>
          <motion.img
            className='object-cover w-[80%] shimmer-effect'
            src={Diagram4}
            alt='Diagram'
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger only the first time in view
          />
        </div>
      </div>
    </div>
  );
};

export default UseCase;
