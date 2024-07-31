export default function About() {
  return (
    <>
      <section id="about" className="py-[9.6rem] border-t border-gray-200">
        <div className="container mx-auto gap-10 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] px-8">
          <div>
            <img
              src="./src/assets/undraw_programming_re_kg9v.svg"
              alt="picture of progeammer"
            />
          </div>
          <div>
            <p className="leading-9">
              Hello! I’m Akp, an enthusiastic engineer with a strong passion for
              technology and creativity. With a background in pure mathematics
              and a deep interest in frontend development, I thrive on turning
              innovative ideas into functional and visually appealing solutions.
              My goal is to use technology to make a positive impact and
              continually improve my problem-solving skills. When I’m not
              coding, I’m likely diving into new technologies, exploring
              creative solutions, or working on personal projects. I’m excited
              about the future and eager to connect with like-minded individuals
              and opportunities that align with my passion for technology and
              innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
