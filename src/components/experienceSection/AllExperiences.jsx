import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Student IT Team Lead",
    company: "NetStandard ICT Solutions",
    date: "May 2019 – Jan 2023",
    responsibilities: [
      "Led student intern team and tracked tasks.",
      "Organized weekly meetings with engineers.",
      "Promoted agile workflows and peer learning.",
    ],
  },
  {
    job: "Database Engineer (Conceptual Level)",
    company: "NetStandard ICT Solutions",
    date: "Jan 2020 – 2023",
    responsibilities: [
      "Designed scalable database schemas.",
      "Trained junior devs on databases.",
      "Supported SQL scripting and tuning.",
    ],
  }, 
  {
    job: "Software Engineer, ICT Welfare Services",
    company: "KAEDCO",
    date: "Oct 2024 – Present",
    responsibilities: [
      "Led ICT Welfare Loan Application project.",
      "Built authentication and loan tracking modules.",
      "Automated email alerts with PHP Mailer.",
      "Ensured data accuracy and security.",
      "Maintained system and trained staff.",
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
