import React from "react";
import { motion } from "framer-motion";
import mainblock from "../assets/mainblock.svg";
import automation from "../assets/automation.svg";
import aimlmodels from "../assets/aimlmodels.svg";
import datamanagement from "../assets/datamanagement.svg";
import automationicon from "../assets/automationicon.svg";
import datamanagementicon from "../assets/datamanagementicon.svg";
import aimodelicon from "../assets/aimodelicon.svg";

const AnalyticsNew = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-[#eee6ff] via-transparent to-[#ffe2f9] py-20 px-10 flex flex-col items-center justify-center gap-10">
      <div className="bg-red-40 w-full flex flex-col items-center justify-center gap-2">
        <p className="text-2xl text-center lg:text-4xl font-semibold">
          The Backbone of Seamless Integration and Smart Analytics
        </p>
        <p className="text-base text-center lg:text-xl text-gray-600 ">
          Transform scattered information into a strategic advantage with
          structured data.
        </p>
      </div>

      {/* main block */}
      <div className=" xl:w-[1380px] flex items-center justify-center relative">
        <div className="flex items-center justify-center">
          <img className="bg-green-30  xl:w-3/4 z-10" src={mainblock} alt="" />

          <motion.img
            className="absolute -top-5 right-36 hidden xl:flex"
            src={automation}
            alt=""
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, margin: "-100px" }}
          />

          <motion.img
            className="absolute top-16 left-44 hidden xl:flex"
            src={aimlmodels}
            alt=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, margin: "-100px" }}
          />

          <motion.img
            className="absolute -bottom-10 right-36 hidden xl:flex"
            src={datamanagement}
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full lg:w-3/4 mx-auto bg-blue-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">

          <motion.div
            className="grid grid-cols-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="col-span-3 w-full h-full flex items-center justify-center">
              <div className="bg-[#fef6ec] h-16 w-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
                <img className="w-1/2" src={automationicon} alt="" />
              </div>
            </div>
            <div className="col-span-9 bg-neutral-20 flex flex-col gap-1 p-2">
              <p className="text-[#f7a437] font-semibold text-lg">Automation Layer</p>
              <p className="text-sm lg:text-base text-gray-500">Automate the organization's business processes.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="col-span-3 w-full h-full flex items-center justify-center">
              <div className="bg-[#e8f7f5] h-16 w-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
                <img className="w-1/2" src={aimodelicon} alt="" />
              </div>
            </div>
            <div className="col-span-9 flex flex-col gap-1 p-2">
              <p className="text-[#27d38e] font-semibold text-lg">AI/ML Models</p>
              <p className="text-sm lg:text-base text-gray-500">Offers pre-build models and custom models</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // Increased duration and added easing
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="col-span-3 w-full h-full flex items-center justify-center">
              <div className="bg-[#fef2f3] h-16 w-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
                <img className="w-1/2" src={datamanagementicon} alt="" />
              </div>
            </div>
            <div className="col-span-9 flex flex-col gap-1 p-2">
              <p className="text-[#ef6a77] font-semibold text-lg">Data Management</p>
              <p className="text-sm lg:text-base text-gray-500">Offer data aggregation and data preparation.</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Section Four */}
      <div className="w-full lg:w-3/4 flex items-center justify-center">
        <p className="text-center font-normal tracking-wide text-lg lg:text-xl">
          The pre-built, ready to deploy, fully supported platform that ingests
          and contextualizes large, complex and disparate data sets in a single,
          unified place.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsNew;
