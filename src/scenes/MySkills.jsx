import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const skills = [
    { src: "assets/skill1.png", name: "CSS" },
    { src: "assets/skill2.png", name: "JavaScript" },
    { src: "assets/skill3.png", name: "React" },
    { src: "assets/skill4.png", name: "Tailwind CSS" },
    { src: "assets/skill5.png", name: "HTML" },
  ];
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-6xl md:text-7xl mb-5">

            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-lg md:text-xl leading-relaxed">

          I’m a frontend developer with a solid foundation in HTML, CSS, JavaScript, and React.js, passionate about crafting clean, responsive user interfaces. My projects demonstrate my ability to build real-world applications using Tailwind CSS, Redux Toolkit, 
          React Router, and Shimmer UI. I’ve worked with bundlers like Parcel and Webpack, optimized performance, and handled CORS policy challenges during API integration. I'm comfortable working with asynchronous logic and managing application state effectively.
           With a focus on problem-solving and scalable architecture, 
          I strive to deliver seamless and accessible experiences that blend functionality with aesthetics.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
             <img
                alt="skills"
                src="assets/skills-image.png"
                className="z-10 w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-auto object-contain"
              />

            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>



<div className="md:flex md:justify-between mt-16 gap-8 flex-wrap">
  {skills.map((skill, i) => (
    <motion.div
      key={i}
      className="relative group w-32 h-32 m-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: i * 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img
        src={skill.src}
        alt={skill.name}
        className="w-full h-full object-contain transform transition duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </div>
    </motion.div>
  ))}
</div>


    </section>
  );
};

export default MySkills;
