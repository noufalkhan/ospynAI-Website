import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

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

  // Lock body scroll when mobile menu is open and handle resize behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && toggleMenu) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    document.body.style.overflow = toggleMenu ? "hidden" : "auto";

    return () => window.removeEventListener("resize", handleResize);
  }, [toggleMenu]);

  const handleNavClick = (section, scrollFunc) => {
    setActiveItem(section);
    scrollFunc();
    setToggleMenu(false);
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
          {/* Logo with Inline SVG */}
          <div className="flex items-center">
            <a href="/" className="font-bold text-gray-700 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="153.01"
                height="40.5"
                viewBox="0 0 153.01 40.5"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.71"
                    y1="0.18"
                    x2="0.139"
                    y2="0.724"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#f0f" />
                    <stop offset="1" stopColor="blue" />
                  </linearGradient>
                </defs>
                <g id="Group_8394" data-name="Group 8394" transform="translate(-139 -19.5)">
                  <text
                    id="Ospyn_AI"
                    data-name="Ospyn AI"
                    transform="translate(139 52)"
                    fill="#272727"
                    fontSize="31"
                    fontFamily="Figtree"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      Ospyn{" "}
                    </tspan>
                    <tspan y="0" fill="#493aca">
                      AI
                    </tspan>
                  </text>
                  <path
                    id="sparkling"
                    d="M8,13.5a1.012,1.012,0,0,1-.9-.56L5.6,9.9,2.56,8.4a1,1,0,0,1,0-1.8L5.6,5.1,7.1,2.06a1,1,0,0,1,1.8,0L10.4,5.1l3.04,1.5a1,1,0,0,1,0,1.8L10.4,9.9,8.9,12.94a1.012,1.012,0,0,1-.9.56Zm-2.74-6,1.53.75a.981.981,0,0,1,.45.45L8,10.23,8.75,8.7a.981.981,0,0,1,.45-.45l1.53-.75L9.2,6.75a.981.981,0,0,1-.45-.45L8,4.77,7.24,6.3a.981.981,0,0,1-.45.45ZM11,22.5a1.012,1.012,0,0,1-.9-.56L9.09,19.9,7.05,18.89a1,1,0,0,1,0-1.8l2.04-1.01,1.01-2.04a1,1,0,0,1,1.8,0l1.01,2.04,2.04,1.01a1,1,0,0,1,0,1.8L12.91,19.9,11.9,21.94a1.012,1.012,0,0,1-.9.56ZM9.76,18l.53.26a.981.981,0,0,1,.45.45l.26.53.26-.53a.981.981,0,0,1,.45-.45l.53-.26-.53-.26a.981.981,0,0,1-.45-.45L11,16.76l-.26.53a.981.981,0,0,1-.45.45Zm7.74-2a1.012,1.012,0,0,1-.9-.56L15.59,13.4l-2.04-1.01a1,1,0,0,1,0-1.8l2.04-1.01L16.6,7.54a1,1,0,0,1,1.8,0l1.01,2.04,2.04,1.01a1,1,0,0,1,0,1.8L19.41,13.4,18.4,15.44A1.012,1.012,0,0,1,17.5,16Zm-1.24-4.5.53.26a.981.981,0,0,1,.45.45l.26.53.26-.53a.981.981,0,0,1,.45-.45l.53-.26-.53-.26a.981.981,0,0,1-.45-.45l-.26-.53-.26.53a.981.981,0,0,1-.45.45Z"
                    transform="translate(270 18)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </svg>
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
                <IconX className="h-6 w-6 text-primary" />
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
              <button onClick={() => setToggleMenu(false)}>
                <IconX className="h-8 w-8 text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center mt-10">
              {[
                { name: "Use Cases", onClick: scrollToAutomation },
                { name: "System Architecture", onClick: scrollToAnalyticsNew },
                { name: "Benefits", onClick: scrollToAgent },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href="#"
                  className={`text-xl text-gray-700 ${
                    activeItem === item.name ? "text-blue-600" : "hover:text-primary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.onClick);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}

export default Navbar;
