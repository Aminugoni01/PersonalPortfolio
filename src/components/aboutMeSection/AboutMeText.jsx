import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Aminu Goni Bukar, a First-Class graduate of Software Engineering, web development instructor,
        and passionate full-stack engineer focused on building inclusive, impactful, and user-driven solutions.
        With strong proficiency in React, Python, PHP, and MySQL, I design and develop real-world systems that enhance accessibility, 
        automate workflows, and address challenges across sectors like education, finance, and health tech.
        I currently serve as a Software Engineer at KAEDCO, where I led the full development of an internal ICT Welfare Loan Application system that
        streamlined staff financing operations. I also spearheaded the creation of an assistive voice-activated system for the visually impaired, 
        a project that reflects my deep commitment to inclusive technology and human-centered design.
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
