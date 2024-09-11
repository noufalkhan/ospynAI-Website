import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconCheck } from '@tabler/icons-react';

const AnimatedGridItem = ({ title, description }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="w-full h-72 bg-white p-6 rounded-xl relative shadow-lg flex flex-col items-center"
    >
      <div className="bg-[#493aca] h-20 w-20 rounded-full absolute -top-10 flex justify-center items-center ring-4 ring-white ring-offset-1 ring-offset-[#493aca]">
        <IconCheck size={40} className="text-white" />
      </div>
      <div className="absolute w-2/4 h-2 bg-[#493aca] -bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
      <div className="flex flex-col items-center mt-16">
        <p className="text-primary font-semibold text-xl text-center">{title}</p>
        <p className="text-sm lg:text-base leading-relaxed mt-3 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const Agent = () => {
  return (
    <div className="bg-purple-100 py-20">
      {/* Section: Business Process */}
      <div className="text-center leading-relaxed mb-16 px-4 md:px-8">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          How OGI Helps You Achieve More
        </h1>
        <p className="text-base lg:text-xl text-gray-600 mt-3 ">
          Unlock productivity, improve outcomes, and simplify operations with OGI.
        </p>
      </div>

      {/* Section: Business Process Grid */}
      <div className="flex justify-center items-center w-full py-10 px-4 md:px-8">
        <div className="w-full max-w-6xl grid md:grid-cols-3 gap-12">
          {/* Grid Item 1 */}
          <AnimatedGridItem
            title="Increase Revenue"
            description="Automating workflows to increase efficiency, enabling employees to focus on strategies that directly boost revenue."
          />

          {/* Grid Item 2 */}
          <AnimatedGridItem
            title="Optimize Operations"
            description="OGI dynamically streamlines processes, cutting out inefficiencies and accelerating task execution through intelligent automation."
          />

          {/* Grid Item 3 */}
          <AnimatedGridItem
            title="Improve Experience"
            description="OGI improves the user experience by offering immediate, customized support that enhances overall satisfaction."
          />
        </div>
      </div>
    </div>
  );
};

export default Agent;
