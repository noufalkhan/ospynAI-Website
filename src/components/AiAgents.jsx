import { IconUserFilled } from "@tabler/icons-react";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === "up" ? -200 : 200, // Only animate from top or bottom
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: index * 0.05, // Reduced delay for faster stagger effect
    },
  }),
  exit: (direction) => ({
    opacity: 0,
    y: direction === "up" ? -100 : 100,
    transition: {
      duration: 0.5,
    },
  }),
};

const AiAgents = () => {
  const [inView, setInView] = useState(new Array(8).fill(false));
  const cardsRef = useRef([]);

  const cards = [
    "Sales AI Assistant",
    "Marketing AI Assistant",
    "Finance AI Assistant",
    "Management AI Assistant",
    "HR AI Assistant",
    "Operation AI Assistant",
    "Analytical AI Assistant",
    "Validation AI Assistant",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index;
        if (entry.isIntersecting) {
          setInView((prev) => {
            const newInView = [...prev];
            newInView[index] = true;
            return newInView;
          });
        }
      });
    });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-20">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">Meet Our AI Agents</h1>
        <p className="text-center mb-8">
          Enhance onboarding accuracy and efficiency using advanced AI-driven
          validation
        </p>
      </div>

      <div className="bg-[#f5f5ff] rounded-3xl sm:px-14 py-10 w-full sm:w-3/4 px-20 sm:p-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:flex lg:flex-wrap lg:gap-3 lg:justify-between">
          {cards.map((card, index) => {
            const direction = index % 2 === 0 ? "up" : "down";

            return (
              <motion.div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                custom={direction}
                variants={cardVariants}
                initial="hidden"
                animate={inView[index] ? "visible" : "hidden"}
                exit="exit"
                className="bg-white flex items-center gap-3 p-2 rounded-lg flex-grow lg:flex-basis-0"
              >
                <div className="p-2 bg-[#ecd7ff] rounded-md">
                  <IconUserFilled className="text-[#be63f9]" />
                </div>
                <div className="px-2 font-semibold">{card}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
