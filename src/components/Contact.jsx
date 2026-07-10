import { motion } from "framer-motion";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-16"
      >
        <p className="uppercase tracking-[0.4em] text-green-400 mb-6">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
          LET'S BUILD
          <br />
          SOMETHING
          <span className="text-green-400"> AMAZING.</span>
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg leading-8 mb-12">
          I'm always excited to learn, build new projects, and collaborate on
          creative ideas. If you'd like to connect, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:somansh12@gmail.com"
            className="border border-white/10 rounded-2xl p-6 hover:border-green-400 hover:bg-green-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            <FaEnvelope className="text-3xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-400 mt-2 break-all">
              somansh12@gmail.com
            </p>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/5RWTwaYzC5"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-green-400 hover:bg-green-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            <FaDiscord className="text-3xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold">Discord</h3>
            <p className="text-gray-400 mt-2">
              Join My Discord
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SomanshBhai"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-green-400 hover:bg-green-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            <FaGithub className="text-3xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="text-gray-400 mt-2 break-all">
              github.com/SomanshBhai
            </p>
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;