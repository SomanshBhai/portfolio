import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaBrain } from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Building modern and responsive websites using React, Vite, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: <FaBrain />,
    title: "Continuous Learning",
    description:
      "Learning Python, JavaScript, UI/UX Design, and improving my frontend development skills every day.",
  },
  {
    icon: <FaRocket />,
    title: "Future Goal",
    description:
      "My goal is to become a Software Engineer and create impactful digital experiences.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          ACHIEVEMENTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center hover:border-green-400 transition-all duration-300"
            >
              <div className="text-5xl text-green-400 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;