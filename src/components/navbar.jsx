import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

  const handleNavClick = () => {
    setActive(false);
  };

  return (
    <div>
      <header className="flex items-center justify-between  lg:px-4 w-full border-b">
        <a href="#hero">
          <h1 className="text-3xl">Ewherhe Akpesiri</h1>
        </a>
        <nav>
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={active ? "open" : "closed"}
              onClick={() => setActive((pv) => !pv)}
              style={{ zIndex: 60 }}
              className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-1 w-10 bg-black"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-1 w-10 bg-black"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-1 w-5 bg-black"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>
        </nav>
      </header>

      {/* Full-screen navbar */}
      {active && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white border-b border-gray-300 z-50 flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center">
            <a
              href="#contact"
              className="text-xl py-4 border-b border-gray-300 w-full text-center"
              onClick={handleNavClick}
            >
              Contact
            </a>
            <a
              href="#work"
              className="text-xl py-4 border-b border-gray-300 w-full text-center"
              onClick={handleNavClick}
            >
              Works
            </a>
            <a
              href="#about"
              className="text-xl py-4 border-b border-gray-300 w-full text-center"
              onClick={handleNavClick}
            >
              About
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
