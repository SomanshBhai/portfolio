import { motion } from "framer-motion";

import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,197,94,.08)] md:px-10">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-[0.15em] text-white"
        >
          SOMANSH<span className="theme-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          <a
            href="#about"
            className="text-gray-300 transition-colors duration-300 hover:text-[var(--theme-accent)]"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 transition-colors duration-300 hover:text-[var(--theme-accent)]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 transition-colors duration-300 hover:text-[var(--theme-accent)]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-300 transition-colors duration-300 hover:text-[var(--theme-accent)]"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <motion.a
            href="https://github.com/SomanshBhai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[color-mix(in_srgb,var(--theme-accent)_10%,transparent)] hover:text-[var(--theme-accent)]"
          >
            <FaGithub size={20} />
          </motion.a>

          {/* Discord */}
          <motion.a
            href="https://discord.gg/5RWTwaYzC5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[color-mix(in_srgb,var(--theme-accent)_10%,transparent)] hover:text-[var(--theme-accent)]"
          >
            <FaDiscord size={20} />
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="https://www.youtube.com/@SomanshEdits2013"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
          >
            <FaYoutube size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
