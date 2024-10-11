import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from '@tabler/icons-react';
import React from 'react';

const ExtraSection = () => {
  return (
    <div className="bg-[#230841] py-10 px-5 md:px-20">
      {/* Contact Info Header */}
      <div className="text-white text-md mb-5">
        <p className="inline-block border-b-2 border-[#f3e8ff]">Contact Info</p>
      </div>

      {/* Contact Information and Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
        {/* First Contact Block */}
        <div className="text-white">
          <h3 className="font-semibold mb-3">India Office</h3>
          <div className="flex gap-3">
            <IconMapPinFilled />
            <p className="font-light">
              Ospyn Technologies Limited, 1st Floor, Kabani, Technopark Phase - 4,
              Pallippuram, Thiruvananthapuram, Kerala - 695 317
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <IconPhoneFilled />
            <p className="font-light">+91 471 6677000</p>
          </div>
        </div>

        {/* Second Contact Block */}
        <div className="text-white">
          <h3 className="font-semibold mb-3">Mumbai Office</h3>
          <div className="flex gap-3">
            <IconMapPinFilled />
            <p className="font-light">
              224, 2nd Floor, Mohid Heights, Suresh Nagar, Off Lokhandwala Road,
              Andheri (West), Mumbai - 400053, Maharashtra.
            </p>
          </div>
        </div>

        {/* Third Contact Block */}
        <div className="text-white">
          <h3 className="font-semibold mb-3">Chennai Office</h3>
          <div className="flex gap-3">
            <IconMapPinFilled />
            <p className="font-light">
              714A, Spencer Plaza Phase -II, 7th Floor, Mount Road, Chennai - 600002, Tamil Nadu
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-neutral-300 my-10"></div>

      {/* Queries, Careers, Others, and Social Media Icons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Queries Section */}
        <div className="flex flex-col gap-2 text-white">
          <p className="font-semibold text-lg">Queries</p>
          <div className="flex gap-2 items-center">
            <IconMailFilled className="text-[#f3e8ff]" />
            <p>info@ospyn.com</p>
          </div>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col gap-2 text-white">
          <p className="font-semibold text-lg">Careers</p>
          <div className="flex gap-2 items-center">
            <IconMailFilled className="text-[#f3e8ff]" />
            <p>careers@ospyn.com</p>
          </div>
        </div>

        {/* Others Section */}
        <div className="flex flex-col gap-2 text-white">
          <p className="font-semibold text-lg">Others</p>
          <div className="flex gap-2 items-center">
            <IconMailFilled className="text-[#f3e8ff]" />
            <p>marketing@ospyn.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 justify-center md:justify-start">
          <div className="border p-2 rounded-md bg-blue-800 bg-opacity-10">
            <IconBrandInstagram className="text-white" size={20} />
          </div>
          <div className="border p-2 rounded-md bg-blue-800 bg-opacity-10">
            <IconBrandX className="text-white" size={20} />
          </div>
          <div className="border p-2 rounded-md bg-blue-800 bg-opacity-10">
            <IconBrandFacebook className="text-white" size={20} />
          </div>
          <div className="border p-2 rounded-md bg-blue-800 bg-opacity-10">
            <IconBrandLinkedin className="text-white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
