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
        <p
          className="uppercase tracking-[0.4em] text-center mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          Get In Touch
        </p>

        <h2
          className="text-5xl md:text-7xl font-black text-center leading-tight"
          style={{ color: "var(--theme-text)" }}
        >
          LET'S CREATE
          <br />
          <span style={{ color: "var(--theme-accent)" }}>
            SOMETHING AMAZING
          </span>
        </h2>

        <p
          className="text-center max-w-2xl mx-auto mt-8 leading-8"
          style={{ color: "var(--theme-muted)" }}
        >
          Whether you want to collaborate, ask a question, or just say hello,
          I'd love to hear from you. Feel free to connect through any platform
          below.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* Email */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border backdrop-blur-xl p-8 text-center transition-all duration-300"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 85%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-accent)";
              e.currentTarget.style.boxShadow =
                "0 0 30px color-mix(in srgb, var(--theme-accent) 18%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaEnvelope
              className="text-5xl mx-auto mb-6"
              style={{ color: "var(--theme-accent)" }}
            />

            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              Email
            </h3>

            <p
              className="mt-4 break-all"
              style={{ color: "var(--theme-muted)" }}
            >
              somansh12@gmail.com
            </p>

            <button
              onClick={copyEmail}
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: "var(--theme-accent)",
                color: "var(--theme-background)",
              }}
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
            className="rounded-3xl border backdrop-blur-xl p-8 text-center transition-all duration-300"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 85%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-accent)";
              e.currentTarget.style.boxShadow =
                "0 0 30px color-mix(in srgb, var(--theme-accent) 18%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaGithub
              className="text-5xl mx-auto mb-6"
              style={{ color: "var(--theme-accent)" }}
            />

            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              GitHub
            </h3>

            <p
              className="mt-4"
              style={{ color: "var(--theme-muted)" }}
            >
              View My Projects
            </p>
          </motion.a>

          {/* YouTube */}
          <motion.a
            whileHover={{ y: -10 }}
            href="https://www.youtube.com/@SomanshEdits2013"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border backdrop-blur-xl p-8 text-center transition-all duration-300"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 85%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ef4444";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(239, 68, 68, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaYoutube className="text-5xl text-red-500 mx-auto mb-6" />

            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              YouTube
            </h3>

            <p
              className="mt-4"
              style={{ color: "var(--theme-muted)" }}
            >
              Watch My Videos
            </p>
          </motion.a>

          {/* Discord */}
          <motion.a
            whileHover={{ y: -10 }}
            href="https://discord.gg/5RWTwaYzC5"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border backdrop-blur-xl p-8 text-center transition-all duration-300"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 85%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#5865F2";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(88, 101, 242, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--theme-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaDiscord
              className="text-5xl mx-auto mb-6"
              style={{ color: "#5865F2" }}
            />

            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              Discord
            </h3>

            <p
              className="mt-4"
              style={{ color: "var(--theme-muted)" }}
            >
              Join My Community
            </p>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
