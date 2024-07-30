import React, { useEffect, useRef } from "react";

export default function Contact() {
  const tickerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;

    if (ticker && content) {
      const contentWidth = content.offsetWidth;
      const clone = content.cloneNode(true);
      ticker.appendChild(clone);

      const duration = contentWidth / 50; // Adjust 50 to change speed

      ticker.style.setProperty("--animation-duration", `${duration}s`);
    }
  }, []);

  return (
    <section id="contact" className="py-[4.6rem] overflow-hidden">
      <div className="ticker-wrapper">
        <div ref={tickerRef} className="ticker">
          <div ref={contentRef} className="ticker-content">
            <span className="ticker-item">EWHERHEAKPESIRI@GMAIL.COM</span>
          </div>
        </div>
      </div>
      <h1 className="text-center">Available for full time Roles</h1>
      <a
        href="mailto:ewherheakpesiri@gmail.com"
        className="hover:text-gray-300 transition-all duration-300 ease-in-out"
      >
        <p className="text-center">( copy my email to reach me )</p>
      </a>
    </section>
  );
}
