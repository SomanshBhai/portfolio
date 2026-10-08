import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { supabase } from "../supabaseClient";

const fallbackTimeline = [
  {
    id: "fallback-1",
    year: "2025",
    title: "Started Programming",
    description:
      "Began learning Python and explored the fundamentals of programming.",
  },
  {
    id: "fallback-2",
    year: "2026",
    title: "Web Development Journey",
    description:
      "Started learning HTML, CSS, JavaScript, React, and modern UI design.",
  },
  {
    id: "fallback-3",
    year: "Now",
    title: "Building Projects",
    description:
      "Creating responsive websites, improving my frontend skills, and learning every day.",
  },
  {
    id: "fallback-4",
    year: "Goal",
    title: "Future Learning",
    description:
      "Continue learning development and build useful software and digital experiences.",
  },
];

const fallbackEducation = {
  institution: "T.A.A.C.",
  program: "Class 9 Student",
  description:
    "Focused on JEE preparation while continuing to learn coding and build projects.",
};

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEducation = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("education")
      .select(
        "id, institution, program, description, start_date, end_date, link_url, featured, sort_order"
      )
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Failed to load education:", error);

      // Keep the existing hardcoded content if Supabase fails.
      setEducation([]);
    } else {
      setEducation(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadEducation();
  }, []);

  const hasSupabaseEducation = education.length > 0;

  const timeline = hasSupabaseEducation
    ? education.map((item) => ({
        id: item.id,
        year:
          item.start_date && item.end_date
            ? `${item.start_date} - ${item.end_date}`
            : item.start_date || item.end_date || "Education",
        title: item.program,
        description: item.description || item.institution,
      }))
    : fallbackTimeline;

  const mainEducation = hasSupabaseEducation
    ? education.find((item) => item.featured) || education[0]
    : fallbackEducation;

  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          My Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 theme-text">
          EDUCATION
        </h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <p className="theme-muted">Loading education...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border theme-border bg-[var(--theme-surface)] backdrop-blur-xl p-10 transition-all duration-300 hover:theme-accent-border hover:shadow-[0_0_30px_color-mix(in_srgb,var(--theme-accent)_15%,transparent)]"
            >
              <h3 className="text-3xl font-black mb-8 theme-text">
                🎓 Education
              </h3>

              <div className="space-y-5 theme-text leading-8">
                <p>
                  <span className="theme-accent font-semibold">
                    Class / Program:
                  </span>{" "}
                  {mainEducation.program}
                </p>

                <p>
                  <span className="theme-accent font-semibold">
                    Institution:
                  </span>{" "}
                  {mainEducation.institution}
                </p>

                <p>
                  <span className="theme-accent font-semibold">
                    Focus:
                  </span>{" "}
                  {mainEducation.description ||
                    "Learning and building new skills every day."}
                </p>

                {(mainEducation.start_date ||
                  mainEducation.end_date) && (
                  <p>
                    <span className="theme-accent font-semibold">
                      Period:
                    </span>{" "}
                    {mainEducation.start_date || "Start"}{" "}
                    {mainEducation.end_date
                      ? `- ${mainEducation.end_date}`
                      : ""}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-8">
              {timeline.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="border-l-2 theme-accent-border pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full theme-accent-bg"></div>

                  <p className="theme-accent font-bold">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold mt-2 theme-text">
                    {item.title}
                  </h3>

                  <p className="theme-muted mt-3 leading-7">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Education;