import React from 'react';
import aileftpic from '../assets/aileftpic.svg';
import airightpic from '../assets/airightpic.svg';

const UseCases = () => {
  return (
    <div className="py-10 px-10 bg-white">
      {/* Card One */}
      <div className="mt-24">
        <div className="leading-relaxed mb-10 text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">Ospyn AI Use Cases</h1>
          <p className="text-xl text-purple-800 mt-3">
          Transform scattered information into a strategic advantage with structured data.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#342c69] to-[#7246a1] xl:h-[500px] w-full max-w-screen-xl flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 py-10 px-5 md:pl-20 md:pr-5">
              <p className="text-xl text-white font-light">AI Driven</p>
              <p className="text-3xl font-semibold text-white my-3">Accounts Payable Automation</p>
              <p className="text-white text-sm mb-10">
                Ospyn OGI automates the Accounts Payable process by intelligently
                matching Purchase Orders (POs), Invoices, and Goods Receipt Notes (GRNs).
                The system automatically extracts and validates invoice data, detects
                duplicates, and routes exceptions for manual verification when needed.
              </p>

              <p className="text-xl text-white mb-3">User Benefits</p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-white">Streamlines invoice processing and reduces manual intervention, ensuring faster, more accurate payment cycles.</li>
                <li className="text-white">Minimizes errors and enhances financial control.</li>
                <li className="text-white">Improves overall operational efficiency.</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 relative hidden md:flex">
              <div className="absolute inset-0 flex items-center justify-end">
                <img className="w-9/12 h-auto object-cover" src={airightpic} alt="Accounts Payable Automation" />
              </div>
            </div>
          </div>
        </div>
      </div>




     


      

      {/* Card Two */}
      <div className="mt-20">
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#342c69] to-[#7246a1] xl:h-[500px] w-full max-w-screen-xl flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 relative hidden md:flex">
              <div className="absolute inset-0 flex items-center justify-start">
                <img className="w-9/12 h-auto object-cover" src={aileftpic} alt="Onboarding Process" />
              </div>
            </div>

            <div className="w-full md:w-1/2 py-10 px-5 md:pl-20 md:pr-5">
              <p className="text-xl text-white font-light">AI Driven</p>
              <p className="text-3xl font-semibold text-white my-3">Onboarding Process</p>
              <p className="text-white text-sm mb-10">
                Once the documents are manually scanned, Ospyn AI automates data
                extraction, validation, and verification, ensuring all mandatory fields are
                complete and compliant. Discrepancies trigger an exception workflow,
                alerting branches for correction. Verified forms are then seamlessly routed
                to the checker for approval.
              </p>

              <p className="text-xl text-white mb-3">User Benefits</p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-white">Enhance efficiency and accuracy.</li>
                <li className="text-white">Ensures compliance with regular standards.</li>
                <li className="text-white">Improve customer satisfaction with a streamlined process.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
