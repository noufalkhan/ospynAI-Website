import React from 'react';
import ospynlogo from '../assets/ospynlogo.svg';

const FooterNew = () => {
    const handleGetStartedClick = () => {
        window.open('https://thebigdatainsights.com/contact-us', '_blank');
    };

    return (
        <footer className="bg-[#230841] text-white">
            {/* Top Section */}
            <div className="px-5 lg:px-20 py-3 ">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start  gap-5">
                    <img src={ospynlogo} alt="Ospyn Logo" className="h-20 w-20" />
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start  gap-3">
                        <p className="">Start your Business Today!</p>
                        <button
                            className="bg-[#4144d3] text-xs py-2 px-4 rounded-lg hover:bg-[#3335b2] transition-colors"
                            onClick={handleGetStartedClick}
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>

                {/* Office Addresses Section */}
                {/* <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10"> */}
                    {/* Thiruvananthapuram Office */}
                    {/* <div>
                        <p className="text-neutral-100 font-semibold mb-2">Thiruvananthapuram Office</p>
                        <p className="leading-relaxed text-sm">
                            1st Floor, Kabani, Technopark Phase - 4 <br />
                            Pallippuram, Thiruvananthapuram,<br />
                            Kerala - 695 317 <br />
                            +91 471 6677000
                        </p>
                    </div> */}

                    {/* Mumbai Office */}
                    {/* <div>
                        <p className="text-neutral-100 font-semibold mb-2">Mumbai Office</p>
                        <p className="leading-relaxed text-sm">
                            224, 2nd Floor, Mohid Heights,<br />
                            Suresh Nagar, Off Lokhandwala Road,<br />
                            Andheri (West), Mumbai - 400053,<br />
                            Maharashtra.
                        </p>
                    </div> */}

                    {/* Chennai Office */}
                    {/* <div>
                        <p className="text-neutral-100 font-semibold mb-2">Chennai Office</p>
                        <p className="leading-relaxed text-sm">
                            714A Spencer Plaza Phase - II, 7th Floor,<br />
                            Mount Road, Chennai - 600002,<br />
                            Tamil Nadu
                        </p>
                    </div> */}

                    {/* UAE Office */}
                    {/* <div>
                        <p className="text-neutral-100 font-semibold mb-2">UAE Office</p>
                        <p className="leading-relaxed text-sm">
                            Office # 36, M Floor, Al Serkal Building,<br />
                            Hor Al Anz, Abu Hail, Dubai,<br />
                            United Arab Emirates PO BOX: 118457 <br />
                            +971 50 426 8283
                        </p>
                    </div> */}
                {/* </div> */}
            </div>

            {/* Bottom Section */}
            <div className="bg-[#150329] py-2 px-5 lg:px-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-xs">
                    <p>&copy; Ospyn Technologies 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNew;
