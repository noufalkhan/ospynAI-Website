import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import airightpic from '../assets/airightpic.svg';
import aileftpic from '../assets/aileftpic.svg';

const AnimatedCard = ({ children, className }) => {
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
      { threshold: 0.5 }
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
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const UseCase = () => {
  return (
    <div className='bg-purple-200 w-full lg:px-20 py-20 flex flex-col gap-10'>
      {/* Section Header */}
      <AnimatedCard className='w-full flex flex-col items-center justify-center text-center gap-3 p-2'>
        <h1 className='text-2xl lg:text-4xl font-semibold tracking-wide'>
          Ospyn AI Use Cases
        </h1>
        <p className='text-base lg:text-lg text-gray-600'>
          Transform scattered information into a strategic advantage with structured data.
        </p>
      </AnimatedCard>

      {/* Card One: Account Payable Automation */}
      <AnimatedCard className='container w-[90%] rounded-3xl mx-auto bg-gradient-to-r from-[#4143d0] to-[#870199] flex'>
        <div className='w-full bg-blue-20 py-20 p-5 lg:pl-20 lg:pr-5 flex flex-col gap-10'>
          {/* Card Content */}
          <div className='flex flex-col gap-4'>
            <p className='text-lg text-white'>AI-Driven</p>
            <p className='text-3xl text-white'>Account Payable Automation</p>
            <p className='text-white text-sm tracking-wide'>
              Ospyn OGI automates the Accounts Payable process by intelligently matching Purchase Orders (POs),
              Invoices, and Goods Receipt Notes (GRNs). The system automatically extracts and validates invoice data,
              detects duplicates, and routes exceptions for manual verification when needed.
            </p>
          </div>
          {/* User Benefits */}
          <div className='flex flex-col gap-4'>
            <p className='text-xl text-white font-medium'>User Benefit</p>
            <p className='text-white text-sm tracking-wide'>
              Streamlines invoice processing, reduces manual intervention, and ensures faster, more accurate payment cycles.
              Minimizes errors, enhances financial control, and improves overall operational efficiency.
            </p>
          </div>
        </div>
        {/* Image on the Right */}
        <div className='w-full items-center justify-center hidden lg:flex'>
          <img className='object-cover w-80' src={airightpic} alt="AI Right" />
        </div>
      </AnimatedCard>

      {/* Card Two: Onboarding Process */}
      <AnimatedCard className='container w-[90%] rounded-3xl mx-auto bg-gradient-to-r from-[#4143d0] to-[#870199] flex'>
        {/* Image on the Left */}
        <div className='w-full lg:w-[40%] hidden lg:flex items-center justify-center'>
          <img className='object-cover w-80' src={aileftpic} alt="AI Left" />
        </div>
        <div className='w-full lg:w-[60%] bg-blue-20 py-20 p-5 lg:pl-20 lg:pr-5 flex flex-col gap-10'>
          {/* Card Content */}
          <div className='flex flex-col gap-4'>
            <p className='text-lg text-white'>AI-Driven</p>
            <p className='text-3xl text-white'>Onboarding Process</p>
            <p className='text-white text-sm tracking-wide'>
              Once the documents are manually scanned, Ospyn AI automates data extraction, validation, and verification,
              ensuring all mandatory fields are complete and compliant. Discrepancies trigger an exception workflow,
              alerting branches for correction. Verified forms are then seamlessly routed to the checker for approval.
            </p>
          </div>
          {/* User Benefits */}
          <div className='flex flex-col gap-4'>
            <p className='text-xl text-white font-medium'>User Benefit</p>
            <p className='text-white text-sm tracking-wide'>
              Streamlines invoice processing, reduces manual intervention, and ensures faster, more accurate payment cycles.
              Minimizes errors, enhances financial control, and improves overall operational efficiency.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default UseCase;
