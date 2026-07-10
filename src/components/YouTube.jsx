import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function YouTube() {
  return (
    <section
      id="youtube"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#1b1b1b] p-12 text-center"
      >
        {/* YouTube Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
            <FaYoutube size={50} className="text-white" />
          </div>
        </div>

        {/* Small Heading */}
        <p className="uppercase tracking-[0.35em] text-green-400 mb-4">
          Content Creator
        </p>

        {/* Channel Name */}
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Somansh Edits
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-10">
          I create funny, relatable, and POV Shorts that entertain,
          connect with people, and bring everyday moments to life
          through creative editing and storytelling.
        </p>

        {/* Button */}
        <a
          href="https://www.youtube.com/@SomanshEdits2013"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          <FaYoutube size={22} />
          Visit My Channel
        </a>
      </motion.div>
    </section>
  );
}

export default YouTube;