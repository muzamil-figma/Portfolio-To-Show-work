import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
       <p>
        I'm <span className="text-lightOrange">Muzamil Nawaz khan </span> a passionate and results-driven Full Stack Web & Android App Developer with over 5 years of professional experience in building responsive, high-performance websites using React.js and Next.js, and crafting powerful mobile solutions for Android.
        I’ve worked with System Software House (Bhakkar) as a web developer and served as an Android App Mentor at Khan Sab Freelance Place, where I led and guided multiple developers on real-world projects.
        Whether you need a modern business website, a scalable web application, or a custom Android app, I deliver with pixel-perfect UI, clean code, and fast turnarounds — all at affordable rates with client satisfaction as my top priority.
        My clients often praise my ability to understand their vision, communicate effectively, and turn ideas into reality with precision. Let’s build something amazing — from idea to deployment!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
