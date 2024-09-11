import { IconAi, IconSettings, IconStack3 } from '@tabler/icons-react';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import analyticsMain from '../assets/analyticsMain.svg';
// import analyticsMainMobile from '../assets/analyticsMainMobile.png';

const AnimatedSection = ({ children }) => {
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const Analytics = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-[#fff] via-[#dcd9db] to-[#fff]">
      {/* Main Heading and Subheading */}
      <div className="container mx-auto px-5 flex flex-col gap-4 md:gap-6">
        <AnimatedSection>
          <p className="text-xl md:text-4xl text-center font-semibold leading-relaxed">
            The Backbone of Seamless Integration and Smart Analytics
          </p>
          <p className="text-base md:text-lg text-center text-gray-500">
            Transform scattered information into a strategic advantage with structured data.
          </p>
        </AnimatedSection>
        
        {/* Main Image */}
        <AnimatedSection>
          <div className="w-full flex items-center justify-center mt-8">
            <img className="flex" src={analyticsMain} alt="Analytics Main" />
            {/* Uncomment the line below to use the Hexagon Background Image */}
            {/* <img src="./HexagonBackground.svg" alt="Hexagon Background" className="absolute inset-0 w-full h-full object-cover" /> */}
            {/* <img className="md:hidden scale-75" src={analyticsMainMobile} alt="Analytics Main Mobile" /> */}
          </div>
        </AnimatedSection>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full flex items-center justify-center mt-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-0 w-full max-w-6xl">
          {/* Card 1: Automation Layer */}
          <AnimatedSection>
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-5 flex gap-5 items-center">
                <div className="bg-[#fef6ec] h-12 w-12 md:p-2 rounded-full flex items-center justify-center">
                  <IconSettings size={50} className="text-[#f69e29]" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm md:text-xl font-semibold text-[#f69e29] mb-2">
                    Automation Layer
                  </p>
                  <p className="text-sm md:text-base">
                    Automate the organization's business processes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: AI-Powered Analytics */}
          <AnimatedSection>
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-5 flex gap-5 items-center">
                <div className="bg-[#e2f2f5] h-12 w-12 md:p-2 rounded-full flex items-center justify-center">
                  <IconAi size={50} className="text-[#47d9a0]" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm md:text-xl font-semibold text-[#47d9a0] mb-2">
                    AI-Powered Analytics
                  </p>
                  <p className="text-sm md:text-base">
                    Leverage AI for deep insights into organizational data.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3: Data Management */}
          <AnimatedSection>
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-5 flex gap-5 items-center">
                <div className="bg-[#f9edf3] h-12 w-12 md:p-2 rounded-full flex items-center justify-center">
                  <IconStack3 size={50} className="text-[#ef6a77]" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm md:text-xl font-semibold text-[#ef6a77] mb-2">
                    Data Management
                  </p>
                  <p className="text-sm md:text-base">
                    Efficiently manage and process large data sets.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Closing Statement */}
      <AnimatedSection>
        <div className="w-full mt-12 flex items-center justify-center">
          <p className="text-xl font-semibold text-center leading-relaxed px-5 md:px-32">
            The pre-built, ready-to-deploy, fully supported platform that ingests and contextualizes large, complex, and disparate data sets in a single, unified place.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Analytics;
