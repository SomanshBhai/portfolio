import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaBrain } from "react-icons/fa";

import { supabase } from "../supabaseClient";

const fallbackAchievements = [
  {
    id: "fallback-web-development",
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Building modern and responsive websites using React, Vite, Tailwind CSS, and Framer Motion.",
  },
  {
    id: "fallback-continuous-learning",
    icon: <FaBrain />,
    title: "Continuous Learning",
    description:
      "Learning Python, JavaScript, UI/UX Design, and improving my frontend development skills every day.",
  },
  {
    id: "fallback-future-goal",
    icon: <FaRocket />,
    title: "Future Goal",
    description:
      "My goal is to become a JEE-focused student while continuing to build useful digital experiences.",
  },
];

const fallbackIcons = {
  "Web Development": <FaLaptopCode />,
  "Continuous Learning": <FaBrain />,
  "Future Goal": <FaRocket />,
};

const fallbackIconList = [
  <FaLaptopCode />,
  <FaBrain />,
  <FaRocket />,
];

function Achievements() {
  const [achievements, setAchievements] = useState(
    fallbackAchievements
  );
  const [loading, setLoading] = useState(true);

  const loadAchievements = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("achievements")
      .select(
        "id, title, description, image_url, date, link_url, featured, sort_order"
      )
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Failed to load achievements:", error);

      // Keep the original achievements if Supabase fails.
      setAchievements(fallbackAchievements);
    } else if (data && data.length > 0) {
      // Supabase data takes priority when available.
      setAchievements(data);
    } else {
      // Keep the original achievements if the table is empty.
      setAchievements(fallbackAchievements);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadAchievements();
  }, []);

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
        <p
          className="uppercase tracking-[0.4em] text-center mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          Journey
        </p>

        <h2
          className="text-5xl md:text-7xl font-black text-center mb-20"
          style={{ color: "var(--theme-text)" }}
        >
          ACHIEVEMENTS
        </h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <p style={{ color: "var(--theme-muted)" }}>
              Loading achievements...
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  borderColor: "var(--theme-accent)",
                  boxShadow:
                    "0 0 30px color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                }}
                className="rounded-3xl border backdrop-blur-xl p-10 text-center transition-all duration-300"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div
                  className="text-5xl mb-6 flex justify-center"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {item.icon ||
                    fallbackIcons[item.title] ||
                    fallbackIconList[index % fallbackIconList.length]}
                </div>

                <h3
                  className="text-2xl font-black mb-4"
                  style={{ color: "var(--theme-text)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="leading-8"
                  style={{ color: "var(--theme-muted)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Achievements;