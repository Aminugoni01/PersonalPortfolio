import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineer, ICT Welfare Services",
    company: "KAEDCO",
    date: "Oct 2024 – Present",
    responsibilities: [
      "Led planning, development, and deployment of the ICT Welfare Loan Application system.",
      "Built user authentication flows, loan tracking modules, and role-based access for staff, administrators, and finance officers.",
      "Integrated SMTP mail servers with PHP Mailer to automate multi-level email alerts, reducing communication delays.",
      "Ensured data accuracy and security through validation logic and optimized MySQL queries.",
      "Provided ongoing system maintenance and staff training, contributing to sustained operational efficiency.",
    ],
  },
  {
    job: "Database Engineer (Conceptual Level)",
    company: "NetStandard ICT Solutions",
    date: "Jan 2022 – Jan 2023",
    responsibilities: [
      "Designed normalized database schemas for business-critical software solutions, prioritizing data integrity and scalability.",
      "Delivered training sessions and hands-on workshops to junior developers and interns on relational database concepts.",
      "Supported the development team with SQL scripting, performance tuning, and database design optimization.",
    ],
  },
  {
    job: "Student IT Team Lead",
    company: "NetStandard ICT Solutions",
    date: "May 2022 – Jan 2023",
    responsibilities: [
      "Coordinated a team of student interns, assigning tasks, tracking progress, and ensuring project deadlines were met.",
      "Organized weekly collaborative meetings with senior engineers to bridge knowledge gaps and deliver impactful internal tools.",
      "Encouraged team innovation by promoting agile workflows and peer learning, leading to improved productivity and project delivery.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
