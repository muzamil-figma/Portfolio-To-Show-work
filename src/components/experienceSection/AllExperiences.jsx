import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: " Bism Software House, Bhakkar",
      date: "2019-2022",
    responsibilities: [
      "Implemented dynamic UIs and reusable components in enterprise-level projects.",
      "Worked on code optimization, lazy loading, and component-level performance tuning.",
    ],
  },
  {
    job: "React / Next.js Developer & Mentor",
    company: "Freelance | Khan Sab Freelance Place, Bhakkar",
     date: "2022 - 2023",
    responsibilities: [
      "Delivered custom web solutions to clients using React, Next.js, and Tailwind CSS.",
      "Built responsive user interfaces and interactive SPAs tailored to business needs.",
    ],
  },
  
  {
    job: "Database Administrator",
    company: "Kolta Jam Medical Billing, Bhakkar",
    date: "2024",
    responsibilities: [
      "Managed patient billing databases and optimized SQL queries for faster operations.",
      "Implemented secure data backup and recovery procedures.",
      "Created automated reporting systems."
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
