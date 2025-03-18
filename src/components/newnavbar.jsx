import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import OspynAILogoPNGFile from "../assets/OspynAILogoPNGFile.png";

const NewNavbar = ({ useCaseRef, anlyticViewRef, newAutomationRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isOpenRef = useRef(isOpen);

  // Sync ref with isOpen state
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Cleanup body overflow style
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined' && !isOpenRef.current) {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.nav
      className="bg-white fixed w-full z-50 shadow-sm"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full lg:px-10 px-4 mx-auto flex items-center justify-between py-4">
        <a href="/" className="text-2xl font-bold text-blue-600">
          <img src={OspynAILogoPNGFile} alt="Logo" className="h-8" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-200">Home</a>
          <button onClick={() => scrollToSection(useCaseRef)} className="text-gray-600 hover:text-blue-600 transition duration-200">Use Cases</button>
          <button onClick={() => scrollToSection(anlyticViewRef)} className="text-gray-600 hover:text-blue-600 transition duration-200">System Architecture</button>
          <button onClick={() => scrollToSection(newAutomationRef)} className="text-gray-600 hover:text-blue-600 transition duration-200">Benefits</button>
          <a href="https://ospynai.com/blog" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition duration-200">Blogs</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-center">
            <a href="/" className="text-gray-600 hover:text-blue-600 text-xl">Home</a>
            <button onClick={() => scrollToSection(useCaseRef)} className="text-gray-600 hover:text-blue-600 text-xl">Use Cases</button>
            <button onClick={() => scrollToSection(anlyticViewRef)} className="text-gray-600 hover:text-blue-600 text-xl">System Architecture</button>
            <button onClick={() => scrollToSection(newAutomationRef)} className="text-gray-600 hover:text-blue-600 text-xl">Benefits</button>
            <a href="https://ospynai.com/blog" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-xl">Blogs</a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NewNavbar;