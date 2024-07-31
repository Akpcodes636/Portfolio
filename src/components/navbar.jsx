import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const VARIANTS = {
    top: {
      open: { rotate: 45, top: "50%" },
      closed: { rotate: 0, top: "35%" },
    },
    middle: {
      open: { rotate: -45 },
      closed: { rotate: 0 },
    },
    bottom: {
      open: { rotate: 45, bottom: "50%", left: "50%" },
      closed: { rotate: 0, bottom: "35%", left: "calc(50% + 10px)" },
    },
  };

  const getStyles = (variant) => {
    const baseStyle = {
      position: "absolute",
      height: "2px",
      backgroundColor: "black",
      transition: "all 0.5s ease-in-out",
    };

    const variantStyle = VARIANTS[variant][active ? "open" : "closed"];

    return {
      ...baseStyle,
      ...variantStyle,
      transform: `rotate(${variantStyle.rotate}deg)`,
    };
  };

  const handleNavClick = () => {
    setActive(false);
  };

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
  }, [active]);

  return (
    <div>
      <header className="flex items-center justify-between lg:px-4 w-full border-b">
        <a href="#hero">
          <h1 className="text-xl md:text-3xl">Ewherhe Akpesiri</h1>
        </a>
        <nav>
          <button
            onClick={() => setActive(!active)}
            style={{ zIndex: 60 }}
            className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
          >
            <span
              style={{
                ...getStyles("top"),
                width: "40px",
                left: "50%",
                transform: `translateX(-50%) ${getStyles("top").transform}`,
              }}
            />
            <span
              style={{
                ...getStyles("middle"),
                width: "40px",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) ${
                  getStyles("middle").transform
                }`,
              }}
            />
            <span
              style={{
                ...getStyles("bottom"),
                width: active ? "40px" : "20px",
                transform: `translateX(-50%) ${getStyles("bottom").transform}`,
              }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen navbar */}
      <div
        style={{
          opacity: active ? 1 : 0,
          transform: `translateX(${active ? "0%" : "-100%"})`,
          transition: "opacity 0.3s, transform 0.3s",
        }}
        className={`fixed inset-0 bg-white border-b border-gray-300 z-50 flex flex-col items-center justify-center ${
          active ? "" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center">
          {["Contact", "Works", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl py-4 border-b border-gray-300 w-full text-center"
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
