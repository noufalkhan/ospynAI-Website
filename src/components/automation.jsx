import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel1 from '../assets/carousel1.png';
import AgentValidation from '../assets/AgentValidation.png';
import AgentInvoice from '../assets/AgentInvoice.png';
import AgentCircular from '../assets/AgentCircular.png';
import AgentConversational from '../assets/AgentConversational.png';

const Automation = () => {
    // State to track the selected card
    const [selectedCard, setSelectedCard] = useState(0);

    // Data for the cards and corresponding content
    const cards = [
        {
            title: 'LLM Based Onboarding Validation',
            content: 'Enhance onboarding accuracy and efficiency using advanced AI-driven validation',
            image: AgentValidation,
            demoText: (
                <>
                    "Customer onboarding is often tedious and time-consuming. With <strong>Ospyn AI</strong>, you can save up to <strong>25%</strong> in turnaround time by ensuring proper validation of customer information, leading to annual savings of up to <strong>0.75 million USD</strong>"
                </>
            )
        },
        {
            title: 'Gen AI Based Account Payable Process',
            content: 'AI-driven automation transforms the accounts payable process, reducing time consumption and eliminating errors',
            image: AgentInvoice,
            demoText: (
                <>
                    "Manually Calibrating a sync between your purchase orders, invoices, and GNRs is a complex and error-prone task. With <strong>Ospyn AI</strong>'s Invoice AI Assistant, you can significantly improve your system's efficiency and accuracy, saving <strong>50%</strong> of the time spent on invoice processing and reducing overall costs by <strong>1.13 million USD</strong> annually"
                </>
            )
        },
        {
            title: 'AI Powered RBI Circular Mapping',
            content: 'AI-powered tool maps RBI updates, ensuring internal circulars stay updated.',
            image: AgentConversational,
            demoText: (
                <>
                   "Keeping track of every update from the RBI is both critical and risky. <strong>Ospyn AI</strong> plays a crucial role by saving <strong>50%</strong> of the time spent reviewing and checking RBI guidelines through AI-powered mapping, resulting in savings of up to <strong>0.90 million USD</strong> annually"</>
            )
        },
        {
            title: 'Conversational Assistant For Information Retrieval',
            content: 'Boost your DMS with AI precision and role-based access for departments.',
            image: AgentCircular,
            demoText: (
                <>
                    "We all need an assistant to resolve our queries at the workplace. <strong>Ospyn AI</strong>, our conversational AI assistant, has the capability to assist each and every employee within a department, saving up to <strong>50%</strong> of the time spent on information retrieval, which results in an annual saving of <strong>1.81 million USD</strong>"  </>
            )
        }
    ];

    return (
        <div className='w-full h-auto sm:h-screen lg:h-auto grid grid-cols-12 p-5 gap-5'>
            {/* Left Section */}
            <div className='col-span-3 bg-[#e3e4fa] rounded-xl p-5 hidden lg:flex'>
                <div className='flex flex-col gap-5 h-full'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-xl h-28 w-full flex flex-col justify-center p-8 cursor-pointer transition-all duration-300 ${selectedCard === index
                                    ? 'bg-gradient-to-r from-[#4441d1] to-[#8606a2] ring-4 ring-purple-300'
                                    : 'bg-white'
                                }`}
                            onClick={() => setSelectedCard(index)}
                        >
                            <p className={`text-${selectedCard === index ? 'white' : 'black'}`}></p>
                            <p className={`font-medium ${selectedCard === index ? 'text-white' : 'text-black'}`}>{card.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className='col-span-12 lg:col-span-9 bg-[#f0f1ff] rounded-xl p-10 flex flex-col justify-between'>
                {/* Carousel Content Section */}
                <div className='flex flex-col items-center justify-center '>
                    <h2 className='text-2xl lg:text-4xl font-semibold tracking-wide mb-2'>{cards[selectedCard].title}</h2>
                    <p className='text-lg'>{cards[selectedCard].content}</p>
                </div>
                <motion.div
                    key={selectedCard}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className=" flex flex-col  h-96 items-center justify-center"
                >
                    {cards[selectedCard].image && (
                        <img src={cards[selectedCard].image} alt={cards[selectedCard].title} className="my-10" />
                    )}
                </motion.div>

                {/* Dots Controller */}
                <div className='flex justify-center '>
                    {cards.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCard(index)}
                            className={`w-3 h-3 rounded-full mx-2 cursor-pointer transition-all duration-300 ${selectedCard === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <div className='flex items-center justify-center gap-5'>
                    <p className='lg:w-2/3 mt-3 text-start'>{cards[selectedCard].demoText}</p>
                </div>
            </div>
        </div>
    );
};

export default Automation;
