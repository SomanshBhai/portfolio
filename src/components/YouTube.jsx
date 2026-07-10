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
        <p className="uppercase tracking-[0.35em] text-green-400 text-center mb-4">
          Content Creator
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          YOUTUBE
        </h2>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#101010] via-[#161616] to-[#0c0c0c] p-10 md:p-14 shadow-[0_0_40px_rgba(255,0,0,.12)]">

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
                  <h3 className="text-4xl font-black">
                    Somansh Edits
                  </h3>

                  <p className="text-gray-400 mt-2 text-lg">
                    @SomanshEdits2013
                  </p>
                </div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mb-10">
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
                className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center"
              >
                <FaPlay className="text-red-500 text-5xl mx-auto mb-5" />

                <h3 className="text-2xl font-black">
                  Content
                </h3>

                <p className="text-gray-400 mt-3">
                  Funny
                  <br />
                  Relatable
                  <br />
                  POV Shorts
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center"
              >
                <FaUserFriends className="text-green-400 text-5xl mx-auto mb-5" />

                <h3 className="text-2xl font-black">
                  Community
                </h3>

                <p className="text-gray-400 mt-3">
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