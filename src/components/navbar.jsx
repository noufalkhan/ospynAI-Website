import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import ospynai from "../assets/ospynai.svg";

function Navbar({ scrollToAgent, scrollToAutomation, scrollToAnalyticsNew }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }
  }, [toggleMenu]);

  return (
    <div className="app z-30">
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }} 
        transition={{ type: "tween", duration: 0.3 }} 
        className="bg-white shadow-md w-full z-50 fixed top-0"
      >
        <div className="container mx-auto flex justify-between items-center px-5 lg:px-20 py-4">
          <div className="flex items-center">
            <a href="/" className="font-bold text-gray-700 flex items-center gap-2">
              <div className="flex items-center justify-center">
                <img src={ospynai} alt="Logo" />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex gap-8 ml-auto items-center">
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                scrollToAutomation();
              }}
            >
              Use Cases
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnalyticsNew();
              }}
            >
              System Architecture
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToAgent();
              }}
            >
              Benefits
            </a>
            {/* <button className="px-4 py-2 rounded-lg text-white bg-blue-800">
              Get Started Now
            </button> */}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <IconMenu2 className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-40 w-full bg-gray-100 flex flex-col lg:hidden transition-all duration-300 overflow-y-auto ${
            toggleMenu ? "h-screen" : "h-0"
          }`}
        >
          <div className="py-6 px-8">
            <a
              href="#"
              className="block py-2 text-gray-700 font-bold border-l-4 border-gray-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToAutomation();
                setToggleMenu(false); // Close menu on click
              }}
            >
              Use Cases
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnalyticsNew();
                setToggleMenu(false); // Close menu on click
              }}
            >
              System Architecture
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToAgent();
                setToggleMenu(false); // Close menu on click
              }}
            >
              Benefits
            </a>
            <button
              className="block w-full px-4 py-2 mt-4 text-center text-white bg-blue-800 rounded-lg"
              onClick={() => setToggleMenu(false)} 
            >
              Get Started Now
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
