import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ospynai from "../assets/ospynai.svg";
import OspynAILogoPNGFile from "../assets/OspynAILogoPNGFile.png";

const NewNavbar = ({ useCaseRef, anlyticViewRef, newAutomationRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToUseCases = () => {
    if (useCaseRef.current) {
      useCaseRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToNewAutomation = () => {
    if (newAutomationRef.current) {
      newAutomationRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToAnlyticView = () => {
    if (anlyticViewRef.current) {
      anlyticViewRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.nav
      className="bg-white  fixed w-full z-20 transition-transform"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">
            <img src={OspynAILogoPNGFile} alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600  hover:text-blue-600 transition duration-200">Home</a>
          <a href="#use-cases" onClick={scrollToUseCases} className="text-gray-600  hover:text-blue-600 transition duration-200">Use Cases</a>
          <a href="#system-architecture" onClick={scrollToAnlyticView} className="text-gray-600  hover:text-blue-600 transition duration-200">System Architecture</a>
          <a href="#benefits" onClick={scrollToNewAutomation} className="text-gray-600  hover:text-blue-600 transition duration-200">Benefits</a>
          <a href="https://thebigdatainsights.com/blog" target="_blank" className="text-gray-600  hover:text-blue-600 transition duration-200">Blogs</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-white p-4 flex flex-col space-y-6 md:hidden"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-200">Home</a>
          <a href="#use-cases" onClick={scrollToUseCases} className="text-gray-600 hover:text-blue-600 transition duration-200">Use Cases</a>
          <a href="#system-architecture" onClick={scrollToAnlyticView} className="text-gray-600 hover:text-blue-600 transition duration-200">System Architecture</a>
          <a href="#benefits" onClick={scrollToNewAutomation} className="text-gray-600 hover:text-blue-600 transition duration-200">Benefits</a>
          <a href="https://thebigdatainsights.com/blog" target="_blank" className="text-gray-600 hover:text-blue-600 transition duration-200">Blogs</a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NewNavbar;
