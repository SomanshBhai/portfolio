import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaCopy,
} from "react-icons/fa";

function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("somansh12@gmail.com");
    alert("Email copied!");
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Get In Touch
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center leading-tight">
          LET'S CREATE
          <br />
          <span className="text-green-400">SOMETHING AMAZING</span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
          Whether you want to collaborate, ask a question, or just say hello,
          I'd love to hear from you. Feel free to connect through any platform
          below.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* Email */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-green-400 transition"
          >

            <FaEnvelope className="text-5xl text-green-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              Email
            </h3>

            <p className="text-gray-400 mt-4 break-all">
              somansh12@gmail.com
            </p>

            <button
              onClick={copyEmail}
              className="mt-6 inline-flex items-center gap-2 bg-green-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              <FaCopy />
              Copy
            </button>

          </motion.div>

          {/* GitHub */}

          <motion.a
            whileHover={{ y: -10 }}
            href="https://github.com/SomanshBhai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-green-400 transition"
          >

            <FaGithub className="text-5xl text-green-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-4">
              View My Projects
            </p>

          </motion.a>

          {/* YouTube */}

          <motion.a
            whileHover={{ y: -10 }}
            href="https://www.youtube.com/@SomanshEdits2013"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-red-500 transition"
          >

            <FaYoutube className="text-5xl text-red-500 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              YouTube
            </h3>

            <p className="text-gray-400 mt-4">
              Watch My Videos
            </p>

          </motion.a>

          {/* Discord */}

          <motion.a
            whileHover={{ y: -10 }}
            href="https://discord.gg/5RWTwaYzC5"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-[#5865F2] transition"
          >

            <FaDiscord className="text-5xl text-[#5865F2] mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              Discord
            </h3>

            <p className="text-gray-400 mt-4">
              Join My Community
            </p>

          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}

export default Contact;