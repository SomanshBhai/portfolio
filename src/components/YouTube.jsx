import { motion } from "framer-motion";

import {
  FaYoutube,
  FaPlay,
  FaUserFriends,
} from "react-icons/fa";

import youtubeLogo from "../assets/youtube-logo/youtube-logo.png";

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
      >
        <p
          className="uppercase tracking-[0.35em] text-center mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          Content Creator
        </p>

        <h2
          className="text-5xl md:text-7xl font-black text-center mb-20"
          style={{ color: "var(--theme-text)" }}
        >
          YOUTUBE
        </h2>

        <div
          className="rounded-3xl border p-10 md:p-14 transition-all duration-300"
          style={{
            borderColor: "var(--theme-border)",
            backgroundColor: "var(--theme-surface)",
            boxShadow:
              "0 0 40px color-mix(in srgb, var(--theme-accent) 12%, transparent)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Side */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <img
                  src={youtubeLogo}
                  alt="Somansh Edits"
                  className="w-28 h-28 rounded-full object-cover border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,.45)]"
                />

                <div>
                  <h3
                    className="text-4xl font-black"
                    style={{ color: "var(--theme-text)" }}
                  >
                    Somansh Edits
                  </h3>

                  <p
                    className="mt-2 text-lg"
                    style={{ color: "var(--theme-muted)" }}
                  >
                    @SomanshEdits2013
                  </p>
                </div>
              </div>

              <p
                className="text-lg leading-9 mb-10"
                style={{ color: "var(--theme-muted)" }}
              >
                I create funny, relatable, and POV Shorts that entertain,
                connect with people, and bring everyday moments to life
                through creative editing and storytelling.
              </p>

              <a
                href="https://www.youtube.com/@SomanshEdits2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaYoutube size={22} />
                Visit My Channel
              </a>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6">

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl p-8 text-center border transition-all duration-300"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-background) 65%, transparent)",
                  borderColor: "var(--theme-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--theme-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px color-mix(in srgb, var(--theme-accent) 20%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--theme-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaPlay className="text-red-500 text-5xl mx-auto mb-5" />

                <h3
                  className="text-2xl font-black"
                  style={{ color: "var(--theme-text)" }}
                >
                  Content
                </h3>

                <p
                  className="mt-3"
                  style={{ color: "var(--theme-muted)" }}
                >
                  Funny
                  <br />
                  Relatable
                  <br />
                  POV Shorts
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl p-8 text-center border transition-all duration-300"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-background) 65%, transparent)",
                  borderColor: "var(--theme-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--theme-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px color-mix(in srgb, var(--theme-accent) 20%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--theme-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaUserFriends
                  className="text-5xl mx-auto mb-5"
                  style={{ color: "var(--theme-accent)" }}
                />

                <h3
                  className="text-2xl font-black"
                  style={{ color: "var(--theme-text)" }}
                >
                  Community
                </h3>

                <p
                  className="mt-3"
                  style={{ color: "var(--theme-muted)" }}
                >
                  Growing every day
                  <br />
                  One Short
                  <br />
                  At a Time
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default YouTube;
