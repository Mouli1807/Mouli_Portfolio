import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> 
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* CONTACT ICONS SECTION */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/3 flex justify-center -mt-20"
  >
    <div className="p-4 border-2 border-blue">
      <img src="../assets/contact-image.jpg" alt="contact" className="w-full h-auto rounded-lg" />
    </div>
        </motion.div>

    {/* Right Contact Links */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
  className="basis-1/2 mt-10 md:mt-0 flex flex-col gap-6"
>
  {/* GitHub */}
  <a
    href="https://github.com/Mouli1807"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-blue rounded-lg hover:bg-red transition duration-300"
  >
    <img src="../assets/github.png" alt="GitHub" className="h-10 w-10" />
    <span className="text-white font-semibold text-lg">https://github.com/Mouli1807</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mouli-tapadar-9ab6281a0/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-blue rounded-lg hover:bg-red transition duration-300"
  >
    <img src="../assets/linkedin.png" alt="LinkedIn" className="h-10 w-10" />
    <span className="text-white font-semibold text-lg">https://www.linkedin.com/in/mouli-tapadar-9ab6281a0/</span>
  </a>

  {/* Gmail - opens in compose mail screen */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mouli.tapadar123@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-blue rounded-lg hover:bg-red transition duration-300"
  >
    <img src="../assets/gmail.png" alt="Gmail" className="h-10 w-10" />
    <span className="text-white font-semibold text-lg">mouli.tapadar123@gmail.com</span>
  </a>
</motion.div>

      </div>
    </section>
  );
};

export default Contact;
