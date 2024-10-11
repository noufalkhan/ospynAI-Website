import React from 'react';
import ospynlogo from '../assets/ospynlogo.svg';

const FooterNew = () => {
    const handleGetStartedClick = () => {
        window.open('https://thebigdatainsights.com/contact-us', '_blank');
    };

    return (
        <footer className="bg-[#230841] text-white">
            {/* Top Section */}
            <div className="px-5 lg:px-20 py-4">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
                    <img src={ospynlogo} alt="Ospyn Logo" className="h-20 w-20" />
                    <div className="text-center lg:text-left">
                        <p className="mb-3">Start your Business Today!</p>
                        <button
                            className="bg-[#4144d3] text-xs py-2 px-4 rounded-lg hover:bg-[#3335b2] transition-colors"
                            onClick={handleGetStartedClick}
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#230841] pb-1 px-5 lg:px-20">
                <div className="text-center lg:text-left text-xs">
                    <p>&copy; Ospyn Technologies 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNew;
