import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react"; // Added close icon
import ospynai from "../assets/ospynai.svg";

function Navbar({ scrollToAgent, scrollToAutomation, scrollToAnalyticsNew }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeItem, setActiveItem] = useState("");

  // Handle navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile menu is open and ensure proper scrolling on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && toggleMenu) {
        setToggleMenu(false); // Close the menu when resizing to desktop
      }
    };
    window.addEventListener("resize", handleResize);

    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Reset overflow when menu is closed
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [toggleMenu]);

  const handleNavClick = (section, scrollFunc) => {
    setActiveItem(section);
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
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-bold text-gray-700 flex items-center gap-2">
              <img src={ospynai} alt="Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? (
                <IconX className="h-6 w-6 text-primary" /> // Close icon when menu is open
              ) : (
                <IconMenu2 className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-100 z-40 flex flex-col lg:hidden">
            <div className="flex justify-end p-4">
              {/* Close button at the top */}
              <button onClick={() => setToggleMenu(false)}>
                <IconX className="h-8 w-8 text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              {[
                { name: "Use Cases", onClick: scrollToAutomation },
                { name: "System Architecture", onClick: scrollToAnalyticsNew },
                { name: "Benefits", onClick: scrollToAgent },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`text-gray-700 font-bold text-lg mb-6 ${
                    activeItem === item.name ? "text-blue-600" : "hover:text-primary"
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
                className="px-4 py-3 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Get Started Now
              </button>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}

export default Navbar;
