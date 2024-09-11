import { motion } from 'framer-motion'
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube
} from '@tabler/icons-react'
import React from 'react'

const Footer = () => {
  // Animation variants for subtle effects
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='bg-[#230841] py-8 w-full px-10'>
      <motion.div
        className='container mx-auto'
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Top Section */}
        <motion.div
          className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10'
          variants={fadeUp}
        >
          <motion.div className='text-white text-xl md:text-xl  tracking-wide'>
            Ospyn Technologies Limited
          </motion.div>
          <motion.div className='flex space-x-4' variants={fadeUp}>
            <a href='#' className='text-white'>
              <IconBrandFacebook size={28} stroke={1.5} />
            </a>
            <a href='#' className='text-white'>
              <IconBrandLinkedin size={28} stroke={1.5} />
            </a>
            <a href='#' className='text-white'>
              <IconBrandX size={28} stroke={1.5} />
            </a>
            <a href='#' className='text-white'>
              <IconBrandYoutube size={28} stroke={1.5} />
            </a>
          </motion.div>
          <motion.p className='text-white text-xs md:text-sm' variants={fadeUp}>
            Copyright © Ospyn Technologies
          </motion.p>
        </motion.div>

        {/* Address Section */}
        <motion.div
          className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-white'
          variants={fadeUp}
        >
          <motion.div variants={fadeUp}>
            <p className='font-bold text-lg md:text-xl tracking-wide mb-2'>
              Thiruvananthapuram Office
            </p>
            <p>1st Floor, Kabani, Technopark Phase - 4,</p>
            <p>Pallippuram, Thiruvananthapuram,</p>
            <p>Kerala - 695 317</p>
            <p>+91 471 6677000</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className='font-bold text-lg md:text-xl tracking-wide mb-2'>
              Mumbai Office
            </p>
            <p>224, 2nd Floor, Mohid Heights,</p>
            <p>Suresh Nagar, Off Lokhandwala Road,</p>
            <p>Andheri (West), Mumbai - 400053,</p>
            <p>Maharashtra.</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className='font-bold text-lg md:text-xl tracking-wide mb-2'>
              Chennai Office
            </p>
            <p>714A, Spencer Plaza Phase - II,</p>
            <p>7th Floor, Mount Road,</p>
            <p>Chennai - 600002,</p>
            <p>Tamil Nadu</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className='font-bold text-lg md:text-xl tracking-wide mb-2'>
              UAE Office
            </p>
            <p>Office # 36, M Floor, Al Serkal Building,</p>
            <p>Hor Al Anz, Abu hail, Dubai,</p>
            <p>United Arab Emirates</p>
            <p>PO BOX: 118457</p>
            <p>+971 50 426 8283</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Footer
