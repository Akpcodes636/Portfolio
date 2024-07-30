export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="py-[9.6rem] h-screen relative flex items-start justify-center"
      >
        <div className="text-center container mx-auto">
          <h1 className=" text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl ">
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
        </div>
        <div className="absolute bottom-24 flex justify-center items-center w-full">
          <div className="w-[34px] h-[55px]">
            <div className="w-[3px] py-[10px] px-[15px] h-[35px] border-2 border-black rounded-[25px] opacity-75 box-content">
              <div className="w-[3px] h-[10px] rounded-full bg-black animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
