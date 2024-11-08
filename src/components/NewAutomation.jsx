import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Diagram1 from '../assets/Diagram1.png';
import Diagram2 from '../assets/Diagram2.png';
import Diagram3 from '../assets/Diagram3.png';
import Diagram5 from '../assets/Diagram5.png';
import Newdiagram1 from '../assets/Newdiagram1.png';
import Newdiagram2 from '../assets/Newdiagram2.png';
import Newdiagram3 from '../assets/Newdiagram3.png';
import Newdiagram4 from '../assets/Newdiagram4.png';

const NewAutomation = () => {
    const [selectedCard, setSelectedCard] = useState(0);
    const [direction, setDirection] = useState(0); // Track swipe direction

    const cards = [
        {
            title: <p>LLM Based <br />Onboarding Validation</p>,
            content: 'Enhance onboarding accuracy and efficiency using advanced AI-driven validation',
            image:Newdiagram1,
            demoText: (
                <>
                    "Customer onboarding is often tedious and time-consuming. With <strong>Ospyn AI</strong>, you can save up to <strong>25%</strong> in turnaround time by ensuring proper validation of customer information, leading to annual savings of up to <strong>0.75 million USD</strong>"
                </>
            )
        },
        {
            title: 'Get AI Based Account Payable Process',
            content: 'AI-driven automation transforms the accounts payable process, reducing time consumption and eliminating errors',
            image: Newdiagram2,
            demoText: (
                <>
                    "Manually calibrating a sync between your purchase orders, invoices, and GNRs is a complex and error-prone task. With <strong>Ospyn AI</strong>'s Invoice AI Assistant, you can significantly improve your system's efficiency and accuracy, saving <strong>50%</strong> of the time spent on invoice processing and reducing overall costs by <strong>1.13 million USD</strong> annually"
                </>
            )
        },
        {
            title: 'AI Powered Central Bank Circular/Compliance Mapping',
            content: 'AI-powered tool maps Central Bank updates, ensuring internal circulars stay updated.',
            image: Diagram3,
            demoText: (
                <>
                    "Keeping track of every update from the RBI is both critical and risky. <strong>Ospyn AI</strong> plays a crucial role by saving <strong>50%</strong> of the time spent reviewing and checking RBI guidelines through AI-powered mapping, resulting in savings of up to <strong>0.90 million USD</strong> annually"
                </>
            )
        },
        {
            title: 'Conversational Assistant For Information Retrieval',
            content: 'Boost your content and data repository with AI precision and role-based access for departments.',
            image: Newdiagram4,
            demoText: (
                <>
                    "We all need an assistant to resolve our queries at the workplace. <strong>Ospyn AI</strong>, our conversational AI assistant, has the capability to assist each and every employee within a department, saving up to <strong>50%</strong> of the time spent on information retrieval, which results in an annual saving of <strong>1.81 million USD</strong>"
                </>
            )
        }
    ];

    const handleCardClick = (index) => {
        if (index >= 0 && index < cards.length) {
            setDirection(index > selectedCard ? 1 : -1); // Determine the swipe direction
            setSelectedCard(index);
        }
    };

    const handleSwipe = (event, info) => {
        const swipeThreshold = 50; // Minimum distance for a swipe to be considered valid

        if (info.offset.x < -swipeThreshold) {
            // Swipe left
            handleCardClick(selectedCard + 1);
        } else if (info.offset.x > swipeThreshold) {
            // Swipe right
            handleCardClick(selectedCard - 1);
        }
    };

    return (
        <div className='h-auto px-5 bg-[#f5f5ff] py-10'>
            {/* Cards Section */}
            <div className='p-4 hidden md:flex flex-col md:flex-row gap-4 bg-white lg:rounded-full shadow-inner-xl items-center justify-center lg:w-3/4 w-full mx-auto border-2'>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className={`h-auto px-4 py-2 w-full md:w-72 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-full ${selectedCard === index
                                ? 'bg-gradient-to-r from-[#4441d1] to-[#8606a2] ring-4 ring-purple-300 text-white  font-normal lg:font-bold'
                                : 'bg-transparent   text-black font-normal lg:font-medium hover:bg-gray-100'
                            }`}
                        onClick={() => handleCardClick(index)}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <p className='text-[10px]  lg:text-sm text-center '> {/* Maintain original text size */}
                            {card.title}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Carousel Section */}
            <div className='flex flex-col items-center my-3 p-3 sm:p-0'>
                {/* Individual Heading for Mobile View */}
                <div className='md:hidden text-center font-semibold  text-xl mb-5'>
                    {cards[selectedCard].title}
                </div>

                <div className='h-auto lg:h-[60vh] w-full bg-red-20 flex items-center justify-center'>
                    <motion.img
                        key={selectedCard}
                        src={cards[selectedCard].image}
                        alt={cards[selectedCard].title}
                        className='h-[95%] object-cover rounded-lg'
                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} // Swipe direction logic
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        drag='x'
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleSwipe}
                    />
                </div>

                {/* Carousel Dots */}
                <div className='flex space-x-2 my-4'>
                    {cards.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${selectedCard === index ? 'bg-[#4442d1]' : 'bg-gray-300'
                                }`}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>

                <div className='text-left sm:text-center w-full lg:w-[90%] mx-auto mb-4'>
                    {cards[selectedCard].demoText}
                </div>

                <div className='flex items-center justify-center'>
                    <motion.button
                        className='bg-[#4144d3] px-6 py-4 rounded-lg text-white text-sm font-semibold tracking-wide'
                        onClick={() => window.open('https://thebigdatainsights.com/contact-us', '_blank')}
                    >
                        Get Started Now
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default NewAutomation;
