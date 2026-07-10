import { motion } from "framer-motion";
import { FaDiscord, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl px-6 md:px-10 py-4 shadow-[0_0_30px_rgba(34,197,94,.08)]">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-[0.15em] text-white"
        >
          SOMANSH<span className="text-green-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.2em] text-sm">

          <a
            href="#about"
            className="text-gray-300 hover:text-green-400 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-green-400 transition-colors duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-green-400 transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-green-400 transition-colors duration-300"
          >
            Contact
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">

          <motion.a
            href="https://github.com/SomanshBhai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-green-400 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://discord.gg/5RWTwaYzC5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-green-400 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
          >
            <FaDiscord size={20} />
          </motion.a>

        </div>

      </nav>
    </motion.header>
  );
}

export default Navbar;