import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import playerImg from "../assets/projects/player.png";

import { supabase } from "../supabaseClient";

const fallbackImages = {
  "Personal Portfolio": portfolioImg,
  "Smart Calculator": calculatorImg,
  "Player Introduction": playerImg,
};

const fallbackDetails = {
  "Personal Portfolio": "/projects/portfolio",
  "Smart Calculator": "/projects/smart-calculator",
  "Player Introduction": "/projects/player-introduction",
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("projects")
      .select(
        "id, title, description, image_url, details_url, project_url, github_url, technologies, featured, sort_order"
      )
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Failed to load projects:", error);
      setProjects([]);
      setError("Unable to load projects right now.");
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleMouseEnter = (event, type) => {
    if (type === "accent-button") {
      event.currentTarget.style.backgroundColor =
        "var(--theme-accent-strong)";
      event.currentTarget.style.boxShadow =
        "0 0 25px color-mix(in srgb, var(--theme-accent) 30%, transparent)";
    }

    if (type === "outline-button") {
      event.currentTarget.style.backgroundColor =
        "color-mix(in srgb, var(--theme-accent) 10%, transparent)";
      event.currentTarget.style.borderColor =
        "var(--theme-accent)";
      event.currentTarget.style.color =
        "var(--theme-accent)";
    }
  };

  const handleMouseLeave = (event, type) => {
    if (type === "accent-button") {
      event.currentTarget.style.backgroundColor =
        "var(--theme-accent)";
      event.currentTarget.style.boxShadow = "none";
    }

    if (type === "outline-button") {
      event.currentTarget.style.backgroundColor = "transparent";
      event.currentTarget.style.borderColor =
        "var(--theme-accent)";
      event.currentTarget.style.color =
        "var(--theme-text)";
    }
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          My Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 theme-text">
          FEATURED PROJECTS
        </h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <p className="theme-muted">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="theme-muted mb-6">
              {error}
            </p>

            <button
              type="button"
              onClick={loadProjects}
              className="px-7 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--theme-accent)",
                color: "var(--theme-background)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--theme-accent-strong)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px color-mix(in srgb, var(--theme-accent) 30%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--theme-accent)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Try Again
            </button>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex justify-center py-20">
            <p className="theme-muted">No projects available.</p>
          </div>
        ) : (
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-14 items-center ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-3xl border theme-border bg-[var(--theme-surface)] shadow-[0_0_35px_color-mix(in_srgb,var(--theme-accent)_8%,transparent)]"
                >
                  <img
                    src={
                      project.image_url ||
                      fallbackImages[project.title] ||
                      portfolioImg
                    }
                    alt={project.title}
                    className="w-full h-[340px] object-cover transition duration-500 hover:scale-105"
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <p className="uppercase tracking-[0.3em] theme-accent text-sm mb-4">
                    {(project.technologies || []).join(" • ")}
                  </p>

                  <h3 className="text-4xl font-black mb-6 theme-text">
                    {project.title}
                  </h3>

                  <p className="theme-muted leading-8 mb-8">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {(project.technologies || []).map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full border theme-accent-border theme-accent text-sm transition-all duration-300"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "color-mix(in srgb, var(--theme-accent) 18%, transparent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "color-mix(in srgb, var(--theme-accent) 10%, transparent)";
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {/* View Project */}
                    {(project.details_url ||
                      fallbackDetails[project.title]) && (
                      <Link
                        to={
                          project.details_url ||
                          fallbackDetails[project.title]
                        }
                        className="flex items-center gap-2 px-7 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: "var(--theme-accent)",
                          color: "var(--theme-background)",
                        }}
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, "accent-button")
                        }
                        onMouseLeave={(e) =>
                          handleMouseLeave(e, "accent-button")
                        }
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    )}

                    {/* Live Demo */}
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          border: "1px solid var(--theme-accent)",
                          color: "var(--theme-text)",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, "outline-button")
                        }
                        onMouseLeave={(e) =>
                          handleMouseLeave(e, "outline-button")
                        }
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                    {/* GitHub */}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          border: "1px solid var(--theme-border)",
                          color: "var(--theme-text)",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--theme-accent)";
                          e.currentTarget.style.color =
                            "var(--theme-accent)";
                          e.currentTarget.style.backgroundColor =
                            "color-mix(in srgb, var(--theme-accent) 8%, transparent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--theme-border)";
                          e.currentTarget.style.color =
                            "var(--theme-text)";
                          e.currentTarget.style.backgroundColor =
                            "transparent";
                        }}
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Projects;