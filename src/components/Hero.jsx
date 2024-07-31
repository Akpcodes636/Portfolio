import ParticlesComponent from "./particle";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="py-[9.6rem] h-screen relative flex items-start justify-center"
      >
        <ParticlesComponent id="particles" />
        <div className="text-center container mx-auto">
          <h1 className=" text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl mb-8">
            Ewherhe Akpesiri is a <span className="font">frontend </span>
            <br className="hidden md:inline-block" />
            <span className="block sm:inline">
              {" "}
              developer creating minimal
            </span>{" "}
            and
            <br className="hidden lg:inline-block" />
            <span className="block lg:inline">
              {" "}
              <span className="font">delightful </span>web experiences,
            </span>
            <br className="hidden xl:inline-block" />
            <span className="block xl:inline">
              blending functions & aesthetics.
            </span>
          </h1>
          <div className="flex items-center justify-center">
            <a
              href="#work"
              className="px-4 py-5 rounded-lg bg-slate-900 hover:bg-slate-600 text-white"
            >
              Explore My Works
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
