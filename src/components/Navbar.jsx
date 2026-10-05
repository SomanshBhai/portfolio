import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    // Keep the URL clean before scrolling
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <nav
        className="flex items-center justify-between rounded-full border theme-border backdrop-blur-2xl px-6 md:px-10 py-4 transition-all duration-300"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--theme-background) 70%, transparent)",
          boxShadow:
            "0 0 30px color-mix(in srgb, var(--theme-accent) 8%, transparent)",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          aria-label="Home"
          className="flex items-center"
        >
          <img
            src="/favicon.png"
            alt="Somansh logo"
            className="w-10 h-10 md:w-11 md:h-11 object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.2em] text-sm">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="theme-muted hover:theme-accent transition-colors duration-300"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="theme-muted hover:theme-accent transition-colors duration-300"
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="theme-muted hover:theme-accent transition-colors duration-300"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="theme-muted hover:theme-accent transition-colors duration-300"
          >
            Contact
          </button>
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
            className="flex items-center justify-center w-11 h-11 rounded-full border theme-border theme-muted transition-all duration-300 hover:theme-accent hover:theme-accent-border"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-text) 5%, transparent)",
            }}
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
            className="flex items-center justify-center w-11 h-11 rounded-full border theme-border theme-muted transition-all duration-300 hover:theme-accent hover:theme-accent-border"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-text) 5%, transparent)",
            }}
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
            className="flex items-center justify-center w-11 h-11 rounded-full border theme-border theme-muted transition-all duration-300 hover:text-red-500 hover:border-red-500"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-text) 5%, transparent)",
            }}
          >
            <FaYoutube size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
