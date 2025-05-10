import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-16">
{/* HEADING */}
<motion.div
  className="md:w-1/3 text-center md:text-left"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}
>
  <div className="inline-block">
    <p className="font-playfair font-semibold text-6xl mb-2 text-red">
      EXPERIENCE
    </p>
    <LineGradient width="w-full" />
  </div>
</motion.div>


      {/* EXPERIENCE TIMELINE */}
<div className="mt-20 flex gap-8">
  {/* Left Timeline Line with Dot */}
  <div className="relative flex flex-col items-center">
    {/* Vertical Line */}
    <div className="w-1 h-full bg-gray-300"></div>
    {/* Dot */}
    <div className="absolute top-0 w-4 h-4 bg-red rounded-full"></div>
  </div>

  {/* Right Experience Content */}
  <motion.div
    className="bg-white shadow-md p-6 rounded-xl w-full md:w-2/3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <h3 className="text-4xl font-semibold text-blue mb-2">
      Software Developer at Capgemini
    </h3>
    <p className="text-xl text-gray-600 mb-4">Oct 2022 – Feb 2025 (2 years 3 months)</p>
    <p className="text-base text-gray-700">
      Contributed to building responsive web applications using React.js, JavaScript, and Redux. Collaborated in agile teams to integrate RESTful APIs, resolved CORS issues, and enhanced UI performance. Delivered scalable, maintainable code and participated in regular code reviews and feature deployments.
    </p>
  </motion.div>
</div>

      
    </section>
  );
};

export default Experience;

