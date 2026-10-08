import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Edit3,
  ExternalLink,
  GraduationCap,
  Plus,
  RefreshCw,
  Save,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { supabase } from "../../../supabaseClient";

const emptyForm = {
  institution: "",
  program: "",
  description: "",
  start_date: "",
  end_date: "",
  link_url: "",
  featured: false,
  sort_order: 0,
};

function EducationManager() {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isEditing = editingId !== null;

  const loadEducation = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase
        .from("education")
        .select(
          "id,institution,program,description,start_date,end_date,link_url,featured,sort_order,created_at,updated_at"
        )
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true });

      if (error) {
        throw error;
      }

      setEducation(data || []);
    } catch (error) {
      console.error("Error loading education:", error);
      setErrorMessage(
        error?.message || "Failed to load education. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEducation();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setErrorMessage("");
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!form.institution.trim()) {
      setErrorMessage("Institution is required.");
      return;
    }

    if (!form.program.trim()) {
      setErrorMessage("Program or class is required.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        institution: form.institution.trim(),
        program: form.program.trim(),
        description: form.description.trim() || null,
        start_date: form.start_date.trim() || null,
        end_date: form.end_date.trim() || null,
        link_url: form.link_url.trim() || null,
        featured: Boolean(form.featured),
        sort_order: Number(form.sort_order) || 0,
      };

      if (isEditing) {
        const { error } = await supabase
          .from("education")
          .update(payload)
          .eq("id", editingId);

        if (error) {
          throw error;
        }

        showSuccess("Education entry updated successfully.");
      } else {
        const { error } = await supabase
          .from("education")
          .insert([payload]);

        if (error) {
          throw error;
        }

        showSuccess("Education entry created successfully.");
      }

      resetForm();
      await loadEducation();
    } catch (error) {
      console.error("Error saving education:", error);
      setErrorMessage(
        error?.message || "Failed to save education. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setForm({
      institution: item.institution || "",
      program: item.program || "",
      description: item.description || "",
      start_date: item.start_date || "",
      end_date: item.end_date || "",
      link_url: item.link_url || "",
      featured: Boolean(item.featured),
      sort_order: item.sort_order ?? 0,
    });

    setErrorMessage("");
    setSuccessMessage("");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this education entry?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { error } = await supabase
        .from("education")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      setEducation((currentEducation) =>
        currentEducation.filter((item) => item.id !== id)
      );

      if (editingId === id) {
        resetForm();
      }

      showSuccess("Education entry deleted successfully.");
    } catch (error) {
      console.error("Error deleting education:", error);
      setErrorMessage(
        error?.message || "Failed to delete education. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleFeatured = async (item) => {
    setTogglingId(item.id);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { error } = await supabase
        .from("education")
        .update({
          featured: !item.featured,
        })
        .eq("id", item.id);

      if (error) {
        throw error;
      }

      setEducation((currentEducation) =>
        currentEducation.map((currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                featured: !currentItem.featured,
              }
            : currentItem
        )
      );

      showSuccess(
        !item.featured
          ? "Education entry featured."
          : "Education entry unfeatured."
      );
    } catch (error) {
      console.error("Error toggling featured:", error);
      setErrorMessage(
        error?.message ||
          "Failed to update featured status. Please try again."
      );
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--theme-background)] px-5 py-8 text-[var(--theme-text)] md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <Link
              to="/admin"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--theme-muted)] transition hover:text-[var(--theme-accent)]"
            >
              <ArrowLeft size={16} />
              Back to Admin
            </Link>

            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-[var(--theme-accent)]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">
              Education Manager
            </h1>

            <p className="mt-2 text-sm text-[var(--theme-muted)] md:text-base">
              Add, edit and organize your education information.
            </p>
          </div>

          <button
            type="button"
            onClick={loadEducation}
            disabled={loading}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </motion.header>

        {/* Messages */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
          >
            <Check size={17} />
            {successMessage}
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {errorMessage}
          </motion.div>
        )}

        {/* Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 md:p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-[var(--theme-accent)]">
                {isEditing ? <Edit3 size={20} /> : <Plus size={20} />}
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  {isEditing ? "Edit Education" : "Add Education"}
                </h2>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  {isEditing
                    ? "Update this education entry."
                    : "Create a new education entry."}
                </p>
              </div>
            </div>

            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] px-3 py-2 text-sm transition hover:border-[var(--theme-accent)]"
              >
                <X size={16} />
                Cancel
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Institution */}
              <div>
                <label
                  htmlFor="institution"
                  className="mb-2 block text-sm font-medium"
                >
                  Institution *
                </label>

                <input
                  id="institution"
                  name="institution"
                  value={form.institution}
                  onChange={handleChange}
                  placeholder="School, college or institution"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Program */}
              <div>
                <label
                  htmlFor="program"
                  className="mb-2 block text-sm font-medium"
                >
                  Program / Class *
                </label>

                <input
                  id="program"
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  placeholder="e.g. Class 9 / CBSE"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Start Date */}
              <div>
                <label
                  htmlFor="start_date"
                  className="mb-2 block text-sm font-medium"
                >
                  Start Date
                </label>

                <input
                  id="start_date"
                  name="start_date"
                  value={form.start_date}
                  onChange={handleChange}
                  placeholder="e.g. 2026"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* End Date */}
              <div>
                <label
                  htmlFor="end_date"
                  className="mb-2 block text-sm font-medium"
                >
                  End Date
                </label>

                <input
                  id="end_date"
                  name="end_date"
                  value={form.end_date}
                  onChange={handleChange}
                  placeholder="e.g. Present"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Link */}
              <div>
                <label
                  htmlFor="link_url"
                  className="mb-2 block text-sm font-medium"
                >
                  Link URL
                </label>

                <input
                  id="link_url"
                  name="link_url"
                  value={form.link_url}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Sort */}
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
                  value={form.sort_order}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe this education experience..."
                  className="w-full resize-y rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                />
              </div>

              {/* Featured */}
              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={form.featured}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[var(--theme-accent)]"
                  />

                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Star size={16} />
                    Featured education
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-accent)] bg-[var(--theme-accent)] px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? (
                  <RefreshCw size={17} className="animate-spin" />
                ) : isEditing ? (
                  <Save size={17} />
                ) : (
                  <Plus size={17} />
                )}

                {saving
                  ? "Saving..."
                  : isEditing
                  ? "Update Education"
                  : "Add Education"}
              </button>

              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:opacity-50"
                >
                  <X size={17} />
                  Cancel
                </button>
              )}
            </div>
          </form>
        </motion.section>

        {/* Education List */}
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                Education Entries
              </h2>

              <p className="mt-1 text-sm text-[var(--theme-muted)]">
                {education.length}{" "}
                {education.length === 1 ? "entry" : "entries"}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-48 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
              <div className="flex items-center gap-3 text-sm text-[var(--theme-muted)]">
                <RefreshCw size={18} className="animate-spin" />
                Loading education...
              </div>
            </div>
          ) : education.length === 0 ? (
            <div className="flex min-h-56 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 text-center">
              <div>
                <GraduationCap
                  size={34}
                  className="mx-auto mb-3 text-[var(--theme-muted)]"
                />

                <p className="font-medium">
                  No education entries yet
                </p>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  Add your first education entry using the form above.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {education.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 transition duration-300 hover:border-[var(--theme-accent)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-[var(--theme-accent)]">
                        <GraduationCap size={21} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold">
                            {item.institution}
                          </h3>

                          {item.featured && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--theme-accent)] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--theme-accent)]">
                              <Star size={11} />
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm font-medium text-[var(--theme-accent)]">
                          {item.program}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-lg border border-[var(--theme-border)] px-2.5 py-1 text-xs text-[var(--theme-muted)]">
                      #{item.sort_order}
                    </span>
                  </div>

                  {(item.start_date || item.end_date) && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-[var(--theme-muted)]">
                      <CalendarDays size={15} />

                      <span>
                        {item.start_date || "—"} →{" "}
                        {item.end_date || "Present"}
                      </span>
                    </div>
                  )}

                  {item.description && (
                    <p className="mt-4 text-sm leading-6 text-[var(--theme-muted)]">
                      {item.description}
                    </p>
                  )}

                  {item.link_url && (
                    <a
                      href={item.link_url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--theme-accent)] transition hover:underline"
                    >
                      <ExternalLink size={15} />
                      Open Link
                    </a>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--theme-border)] pt-4">
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] px-3 py-2 text-sm transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                    >
                      <Edit3 size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleFeatured(item)}
                      disabled={togglingId === item.id}
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] px-3 py-2 text-sm transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {togglingId === item.id ? (
                        <RefreshCw size={15} className="animate-spin" />
                      ) : (
                        <Star size={15} />
                      )}

                      {item.featured ? "Unfeature" : "Feature"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      disabled={deletingId === item.id}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-3 py-2 text-sm text-red-400 transition hover:border-red-500/60 hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === item.id ? (
                        <RefreshCw size={15} className="animate-spin" />
                      ) : (
                        <Trash2 size={15} />
                      )}

                      {deletingId === item.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default EducationManager;