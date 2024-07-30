import React, { useEffect, useRef } from "react";

const projects = [
  {
    name: "Omnifood",
    description:
      "Omifood is an AI powered food subscription that will make you eat healthy again, 365 days a year.it's Tailored to your personal taste and nutritional needs.",
    githubLink: "https://github.com/Akpcodes636/Omnifood",
    websiteLink: "https://omnifood-tawny.vercel.app/",
  },
  {
    name: "FoodQuest",
    description:
      "Explore our menu using foodquest.Find what you're looking for with using foodQuest",
    githubLink: "https://github.com/Akpcodes636/Food-Quest",
    websiteLink: "https://akpcodes636.github.io/Food-Quest/",
  },
  {
    name: "Greene Nations",
    description:
      "Greene Nation is a comprehensive network marketing community designed to empower its members through a unique 4x4 matrix system.",
    githubLink: "https://github.com/Akpcodes636/Greene-frontend-",
    websiteLink: "https://greene-test.onrender.com",
  },
];

export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const parallaxBg = parallaxRef.current;

    const handleScroll = () => {
      if (section && parallaxBg) {
        const scrollPosition = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in view
        if (
          scrollPosition + window.innerHeight > sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const relativeScroll = scrollPosition - sectionTop;
          parallaxBg.style.transform = `translateY(${relativeScroll * 0.3}px)`; // Adjust 0.3 for desired effect
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-[8.6rem] px-8 border-t border-gray-200 overflow-hidden text-white min-h-screen"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl mb-16 font-bold">
          Projects ({projects.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] mb-8 font-semibold">
          <span>NAME</span>
          <span>DESCRIPTION</span>
          <span>LINKS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-y-8">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p>{project.description}</p>
              <div className="space-x-4">
                <a
                  href={project.githubLink}
                  className="hover:text-gray-300 transition-all duration-300 ease-in-out"
                >
                  ( GITHUB )
                </a>
                <a
                  href={project.websiteLink}
                  className="hover:text-gray-300 transition-all duration-300 ease-in-out"
                >
                  ( WEBSITE )
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
