import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Edit,
  ExternalLink,
  FolderKanban,
  Plus,
  RefreshCw,
  Save,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { supabase } from "../../supabaseClient";

const initialForm = {
  title: "",
  description: "",
  image_url: "",
  details_url: "",
  project_url: "",
  github_url: "",
  technologies: "",
  featured: false,
  sort_order: "",
};

function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const [deletingProjectId, setDeletingProjectId] = useState(null);
  const [togglingFeaturedId, setTogglingFeaturedId] = useState(null);

  const loadProjects = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, title, description, image_url, details_url, project_url, github_url, technologies, featured, sort_order"
        )
        .order("sort_order", { ascending: true });

      if (error) {
        throw error;
      }

      setProjects(data || []);
    } catch (error) {
      console.error("Failed to load projects:", error);

      setErrorMessage(
        error?.message || "Failed to load projects. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openAddForm = () => {
    clearMessages();

    setEditingProjectId(null);
    setForm(initialForm);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const openEditForm = (project) => {
    clearMessages();

    setEditingProjectId(project.id);

    setForm({
      title: project.title || "",
      description: project.description || "",
      image_url: project.image_url || "",
      details_url: project.details_url || "",
      project_url: project.project_url || "",
      github_url: project.github_url || "",
      technologies: Array.isArray(project.technologies)
        ? project.technologies.join(", ")
        : "",
      featured: Boolean(project.featured),
      sort_order:
        project.sort_order === null ||
        project.sort_order === undefined
          ? ""
          : String(project.sort_order),
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCloseForm = () => {
    if (saving) {
      return;
    }

    setShowForm(false);
    setEditingProjectId(null);
    setForm(initialForm);
    clearMessages();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    clearMessages();

    if (!form.title.trim()) {
      setErrorMessage("Project title is required.");
      return;
    }

    if (!form.description.trim()) {
      setErrorMessage("Project description is required.");
      return;
    }

    const sortOrder =
      form.sort_order.trim() === ""
        ? editingProjectId
          ? projects.find(
              (project) => project.id === editingProjectId
            )?.sort_order || 1
          : projects.length + 1
        : Number(form.sort_order);

    if (!Number.isInteger(sortOrder) || sortOrder < 1) {
      setErrorMessage(
        "Sort order must be a positive whole number."
      );
      return;
    }

    const technologies = form.technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const projectData = {
      title: form.title.trim(),
      description: form.description.trim(),
      image_url: form.image_url.trim() || null,
      details_url: form.details_url.trim() || null,
      project_url: form.project_url.trim() || null,
      github_url: form.github_url.trim() || null,
      technologies,
      featured: form.featured,
      sort_order: sortOrder,
    };

    setSaving(true);

    try {
      if (editingProjectId) {
        const { error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", editingProjectId);

        if (error) {
          throw error;
        }

        setSuccessMessage("Project updated successfully.");
      } else {
        const { error } = await supabase
          .from("projects")
          .insert(projectData);

        if (error) {
          throw error;
        }

        setSuccessMessage("Project added successfully.");
      }

      setShowForm(false);
      setEditingProjectId(null);
      setForm(initialForm);

      await loadProjects();
    } catch (error) {
      console.error("Failed to save project:", error);

      setErrorMessage(
        error?.message || "Failed to save project. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (project) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    clearMessages();
    setDeletingProjectId(project.id);

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);

      if (error) {
        throw error;
      }

      setSuccessMessage(
        `"${project.title}" was deleted successfully.`
      );

      await loadProjects();
    } catch (error) {
      console.error("Failed to delete project:", error);

      setErrorMessage(
        error?.message || "Failed to delete project. Please try again."
      );
    } finally {
      setDeletingProjectId(null);
    }
  };

  const handleFeaturedToggle = async (project) => {
    clearMessages();
    setTogglingFeaturedId(project.id);

    try {
      const { error } = await supabase
        .from("projects")
        .update({
          featured: !project.featured,
        })
        .eq("id", project.id);

      if (error) {
        throw error;
      }

      setProjects((current) =>
        current.map((item) =>
          item.id === project.id
            ? {
                ...item,
                featured: !item.featured,
              }
            : item
        )
      );

      setSuccessMessage(
        project.featured
          ? `"${project.title}" removed from featured projects.`
          : `"${project.title}" marked as featured.`
      );
    } catch (error) {
      console.error("Failed to update featured status:", error);

      setErrorMessage(
        error?.message ||
          "Failed to update featured status. Please try again."
      );
    } finally {
      setTogglingFeaturedId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--theme-background)] px-5 py-8 text-[var(--theme-text)] md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-[var(--theme-accent)]">
              Project Management
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">
              Manage Projects
            </h1>

            <p className="mt-2 text-sm text-[var(--theme-muted)] md:text-base">
              Add, edit and manage the projects shown on your
              portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)]"
            >
              <ArrowLeft size={17} />
              Admin
            </Link>

            <button
              type="button"
              onClick={openAddForm}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--theme-accent)] px-4 py-2.5 text-sm font-semibold text-[var(--theme-background)] transition hover:scale-105"
            >
              <Plus size={17} />
              Add Project
            </button>
          </div>
        </motion.header>

        {/* SUCCESS */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-3 rounded-xl border border-[var(--theme-accent)] bg-[color-mix(in_srgb,var(--theme-accent)_10%,transparent)] px-4 py-3 text-sm text-[var(--theme-accent)]"
          >
            <Check size={18} />
            {successMessage}
          </motion.div>
        )}

        {/* ERROR */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {errorMessage}
          </motion.div>
        )}

        {/* FORM */}
        {showForm && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 md:p-8"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--theme-accent)]">
                  {editingProjectId
                    ? "Edit Project"
                    : "New Project"}
                </p>

                <h2 className="text-2xl font-bold">
                  {editingProjectId
                    ? "Edit Project"
                    : "Add Project"}
                </h2>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  {editingProjectId
                    ? "Update this project in your portfolio database."
                    : "Add a new project to your portfolio database."}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseForm}
                disabled={saving}
                className="rounded-xl border border-[var(--theme-border)] p-2.5 transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close form"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* TITLE + ORDER */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium"
                  >
                    Title *
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. Smart Calculator"
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sort_order"
                    className="mb-2 block text-sm font-medium"
                  >
                    Sort Order
                  </label>

                  <input
                    id="sort_order"
                    name="sort_order"
                    type="number"
                    min="1"
                    step="1"
                    value={form.sort_order}
                    onChange={handleChange}
                    placeholder={`Default: ${
                      projects.length + 1
                    }`}
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Description *
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the project..."
                  className="w-full resize-y rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <label
                  htmlFor="technologies"
                  className="mb-2 block text-sm font-medium"
                >
                  Technologies
                </label>

                <input
                  id="technologies"
                  name="technologies"
                  type="text"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder="React, Tailwind CSS, Supabase"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />

                <p className="mt-2 text-xs text-[var(--theme-muted)]">
                  Separate technologies with commas.
                </p>
              </div>

              {/* IMAGE + DETAILS */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="image_url"
                    className="mb-2 block text-sm font-medium"
                  >
                    Image URL
                  </label>

                  <input
                    id="image_url"
                    name="image_url"
                    type="url"
                    value={form.image_url}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details_url"
                    className="mb-2 block text-sm font-medium"
                  >
                    Details URL
                  </label>

                  <input
                    id="details_url"
                    name="details_url"
                    type="text"
                    value={form.details_url}
                    onChange={handleChange}
                    placeholder="/projects/my-project"
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />

                  <p className="mt-2 text-xs text-[var(--theme-muted)]">
                    Internal portfolio route.
                  </p>
                </div>
              </div>

              {/* LIVE + GITHUB */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="project_url"
                    className="mb-2 block text-sm font-medium"
                  >
                    Live / Demo URL
                  </label>

                  <input
                    id="project_url"
                    name="project_url"
                    type="url"
                    value={form.project_url}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="github_url"
                    className="mb-2 block text-sm font-medium"
                  >
                    GitHub URL
                  </label>

                  <input
                    id="github_url"
                    name="github_url"
                    type="url"
                    value={form.github_url}
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                    className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  />
                </div>
              </div>

              {/* FEATURED */}
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-4">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                  className="h-4 w-4 accent-[var(--theme-accent)]"
                />

                <div>
                  <p className="text-sm font-medium">
                    Featured Project
                  </p>

                  <p className="mt-1 text-xs text-[var(--theme-muted)]">
                    Mark this project as featured on the
                    portfolio.
                  </p>
                </div>
              </label>

              {/* FORM ACTIONS */}
              <div className="flex flex-wrap justify-end gap-3 border-t border-[var(--theme-border)] pt-6">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <X size={16} />
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--theme-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--theme-background)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <RefreshCw
                        size={16}
                        className="animate-spin"
                      />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      {editingProjectId
                        ? "Update Project"
                        : "Save Project"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.section>
        )}

        {/* PROJECT LIST */}
        <section>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-accent)]">
                <FolderKanban size={21} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Projects
                </h2>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  {projects.length} project
                  {projects.length === 1 ? "" : "s"} available
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={loadProjects}
              disabled={loading}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={16}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {loading ? (
              <div className="col-span-full flex min-h-48 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
                <div className="flex items-center gap-3 text-sm text-[var(--theme-muted)]">
                  <RefreshCw
                    size={18}
                    className="animate-spin"
                  />
                  Loading projects...
                </div>
              </div>
            ) : projects.length === 0 ? (
              <div className="col-span-full flex min-h-48 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 text-center">
                <div>
                  <FolderKanban
                    size={30}
                    className="mx-auto mb-3 text-[var(--theme-muted)]"
                  />

                  <p className="font-medium">
                    No projects found
                  </p>

                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    Add a project to start building your
                    portfolio.
                  </p>
                </div>
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]"
                >
                  {/* IMAGE */}
                  {project.image_url && (
                    <div className="h-48 overflow-hidden border-b border-[var(--theme-border)]">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* TITLE / BADGES / ACTIONS */}
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-[var(--theme-border)] px-2.5 py-1 text-xs text-[var(--theme-muted)]">
                            Order #{project.sort_order ?? "—"}
                          </span>

                          {project.featured && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--theme-accent)] px-2.5 py-1 text-xs text-[var(--theme-accent)]">
                              <Star size={11} />
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            openEditForm(project)
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                        >
                          <Edit size={14} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(project)
                          }
                          disabled={
                            deletingProjectId === project.id
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingProjectId ===
                          project.id ? (
                            <RefreshCw
                              size={14}
                              className="animate-spin"
                            />
                          ) : (
                            <Trash2 size={14} />
                          )}

                          Delete
                        </button>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="line-clamp-3 text-sm leading-6 text-[var(--theme-muted)]">
                      {project.description ||
                        "No description provided."}
                    </p>

                    {/* TECHNOLOGIES */}
                    {project.technologies?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-[var(--theme-border)] px-3 py-1 text-xs text-[var(--theme-muted)]"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    )}

                    {/* FEATURED TOGGLE */}
                    <div className="mt-5 flex items-center justify-between rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Star
                          size={16}
                          className={
                            project.featured
                              ? "text-[var(--theme-accent)]"
                              : "text-[var(--theme-muted)]"
                          }
                        />

                        <span className="text-sm">
                          Featured
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleFeaturedToggle(project)
                        }
                        disabled={
                          togglingFeaturedId === project.id
                        }
                        className={`relative h-6 w-11 rounded-full transition ${
                          project.featured
                            ? "bg-[var(--theme-accent)]"
                            : "bg-[var(--theme-muted)]/30"
                        } ${
                          togglingFeaturedId === project.id
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        aria-label={`${
                          project.featured
                            ? "Disable"
                            : "Enable"
                        } featured status`}
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-[var(--theme-background)] transition ${
                            project.featured
                              ? "left-6"
                              : "left-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* LINKS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.details_url && (
                        <Link
                          to={project.details_url}
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-accent)] px-3 py-2 text-xs font-medium text-[var(--theme-accent)] transition hover:bg-[var(--theme-accent)] hover:text-[var(--theme-background)]"
                        >
                          View Details
                        </Link>
                      )}

                      {project.project_url && (
                        <a
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)]"
                        >
                          <ExternalLink size={14} />
                          Live
                        </a>
                      )}

                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)]"
                        >
                          <FaGithub size={14} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectsManager;