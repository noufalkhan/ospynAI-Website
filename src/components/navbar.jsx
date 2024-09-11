import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import ospynai from "../assets/ospynai.svg";

function Navbar({ scrollToAgent, scrollToAutomation, scrollToAnalyticsNew }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeItem, setActiveItem] = useState(""); // Track active navbar item

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

  const handleNavClick = (section, scrollFunc) => {
    setActiveItem(section); // Update active item
    scrollFunc();
    setToggleMenu(false); // Close menu on click
  };

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
            {[
              { name: "Use Cases", onClick: scrollToAutomation },
              { name: "System Architecture", onClick: scrollToAnalyticsNew },
              { name: "Benefits", onClick: scrollToAgent },
            ].map((item) => (
              <motion.a
                key={item.name}
                href="#"
                className={`text-gray-700 transition-colors duration-300 ${
                  activeItem === item.name ? "text-blue-600" : "hover:text-primary"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name, item.onClick);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
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
            {[
              { name: "Use Cases", onClick: scrollToAutomation },
              { name: "System Architecture", onClick: scrollToAnalyticsNew },
              { name: "Benefits", onClick: scrollToAgent },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`block py-2 text-gray-700 font-bold border-l-4 ${
                  activeItem === item.name ? "border-blue-600 text-blue-600" : "border-gray-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name, item.onClick);
                }}
              >
                {item.name}
              </a>
            ))}
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
