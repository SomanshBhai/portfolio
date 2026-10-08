import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Edit3,
  ExternalLink,
  Link as LinkIcon,
  PlaySquare,
  Plus,
  RefreshCw,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { supabase } from "../../../supabaseClient";

const emptyForm = {
  title: "",
  description: "",
  thumbnail_url: "",
  video_url: "",
  channel_url: "",
  featured: false,
  sort_order: 0,
};

function YouTubeManager() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadVideos = async () => {
    setLoading(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from("youtube")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      setVideos([]);
    } else {
      setVideos(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    setSaving(true);

    const payload = {
      title: form.title.trim(),
      description: form.description.trim() || null,
      thumbnail_url: form.thumbnail_url.trim() || null,
      video_url: form.video_url.trim() || null,
      channel_url: form.channel_url.trim() || null,
      featured: Boolean(form.featured),
      sort_order: Number(form.sort_order) || 0,
      updated_at: new Date().toISOString(),
    };

    let result;

    if (editingId) {
      result = await supabase
        .from("youtube")
        .update(payload)
        .eq("id", editingId);
    } else {
      result = await supabase.from("youtube").insert(payload);
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    setMessage(
      editingId
        ? "YouTube entry updated successfully."
        : "YouTube entry created successfully."
    );

    resetForm();
    await loadVideos();

    setSaving(false);
  };

  const handleEdit = (video) => {
    setMessage("");
    setError("");

    setEditingId(video.id);

    setForm({
      title: video.title || "",
      description: video.description || "",
      thumbnail_url: video.thumbnail_url || "",
      video_url: video.video_url || "",
      channel_url: video.channel_url || "",
      featured: Boolean(video.featured),
      sort_order: video.sort_order ?? 0,
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this YouTube entry?"
    );

    if (!confirmed) return;

    setMessage("");
    setError("");
    setDeletingId(id);

    const { error: deleteError } = await supabase
      .from("youtube")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
    } else {
      setMessage("YouTube entry deleted successfully.");
      await loadVideos();
    }

    setDeletingId(null);
  };

  const handleToggleFeatured = async (video) => {
    setMessage("");
    setError("");
    setTogglingId(video.id);

    const { error: toggleError } = await supabase
      .from("youtube")
      .update({
        featured: !video.featured,
        updated_at: new Date().toISOString(),
      })
      .eq("id", video.id);

    if (toggleError) {
      setError(toggleError.message);
    } else {
      setMessage(
        video.featured
          ? "Entry removed from featured."
          : "Entry marked as featured."
      );

      await loadVideos();
    }

    setTogglingId(null);
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-3 text-[var(--theme-text)] outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]";

  return (
    <main className="min-h-screen bg-[var(--theme-background)] px-4 py-8 text-[var(--theme-text)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/admin"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--theme-muted)] transition hover:text-[var(--theme-accent)]"
            >
              <ArrowLeft size={16} />
              Back to Admin
            </Link>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-3">
                <PlaySquare
                  size={24}
                  className="text-[var(--theme-accent)]"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  YouTube Manager
                </h1>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  Manage your YouTube content from the admin panel.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={loadVideos}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-3 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <button
              type="button"
              onClick={() => {
                setMessage("");
                setError("");
                setEditingId(null);
                setForm(emptyForm);
                setShowForm((current) => !current);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {showForm ? <X size={17} /> : <Plus size={17} />}
              {showForm ? "Close" : "Add YouTube"}
            </button>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-3 text-sm"
          >
            <Check
              size={18}
              className="shrink-0 text-[var(--theme-accent)]"
            />
            <span>{message}</span>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 sm:p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  {editingId ? "Edit YouTube Entry" : "Add YouTube Entry"}
                </h2>

                <p className="mt-1 text-sm text-[var(--theme-muted)]">
                  Add the information that should appear on your portfolio.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter YouTube title"
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter a description"
                  rows={4}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Thumbnail URL
                </label>

                <input
                  type="url"
                  name="thumbnail_url"
                  value={form.thumbnail_url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Video URL
                </label>

                <input
                  type="url"
                  name="video_url"
                  value={form.video_url}
                  onChange={handleChange}
                  placeholder="https://youtube.com/watch?v=..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Channel URL
                </label>

                <input
                  type="url"
                  name="channel_url"
                  value={form.channel_url}
                  onChange={handleChange}
                  placeholder="https://youtube.com/@..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Sort Order
                </label>

                <input
                  type="number"
                  name="sort_order"
                  value={form.sort_order}
                  onChange={handleChange}
                  min="0"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <input
                id="featured"
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="h-4 w-4 accent-[var(--theme-accent)]"
              />

              <label
                htmlFor="featured"
                className="cursor-pointer text-sm font-medium"
              >
                Featured YouTube content
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? (
                  <RefreshCw size={17} className="animate-spin" />
                ) : (
                  <Save size={17} />
                )}

                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Entry"
                    : "Create Entry"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--theme-border)] px-5 py-3 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:opacity-50"
              >
                <X size={17} />
                Cancel
              </button>
            </div>
          </motion.form>
        )}

        {/* Content */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">YouTube Content</h2>
              <p className="mt-1 text-sm text-[var(--theme-muted)]">
                {videos.length}{" "}
                {videos.length === 1 ? "entry" : "entries"}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-60 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
              <RefreshCw
                size={28}
                className="animate-spin text-[var(--theme-accent)]"
              />
            </div>
          ) : videos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 py-16 text-center">
              <PlaySquare
                size={40}
                className="mx-auto mb-4 text-[var(--theme-muted)]"
              />

              <h3 className="text-lg font-semibold">
                No YouTube content yet
              </h3>

              <p className="mt-2 text-sm text-[var(--theme-muted)]">
                Add your first YouTube entry to get started.
              </p>

              <button
                type="button"
                onClick={() => {
                  setMessage("");
                  setError("");
                  setEditingId(null);
                  setForm(emptyForm);
                  setShowForm(true);
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--theme-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Plus size={17} />
                Add YouTube
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              {videos.map((video, index) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="aspect-video w-full shrink-0 overflow-hidden bg-[var(--theme-background)] lg:w-72">
                      {video.thumbnail_url ? (
                        <img
                          src={video.thumbnail_url}
                          alt={video.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <PlaySquare
                            size={42}
                            className="text-[var(--theme-muted)]"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-bold">
                              {video.title}
                            </h3>

                            {video.featured && (
                              <span className="rounded-full border border-[var(--theme-border)] px-2.5 py-1 text-xs font-medium text-[var(--theme-accent)]">
                                Featured
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-xs text-[var(--theme-muted)]">
                            Sort order: {video.sort_order}
                          </p>
                        </div>
                      </div>

                      {video.description && (
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--theme-muted)]">
                          {video.description}
                        </p>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {video.video_url && (
                          <a
                            href={video.video_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)]"
                          >
                            <ExternalLink size={14} />
                            Video
                          </a>
                        )}

                        {video.channel_url && (
                          <a
                            href={video.channel_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)]"
                          >
                            <LinkIcon size={14} />
                            Channel
                          </a>
                        )}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--theme-border)] pt-4">
                        <button
                          type="button"
                          onClick={() => handleEdit(video)}
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)]"
                        >
                          <Edit3 size={14} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleFeatured(video)}
                          disabled={togglingId === video.id}
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--theme-border)] px-3 py-2 text-xs font-medium transition hover:border-[var(--theme-accent)] disabled:opacity-50"
                        >
                          {togglingId === video.id ? (
                            <RefreshCw
                              size={14}
                              className="animate-spin"
                            />
                          ) : (
                            <Check size={14} />
                          )}

                          {video.featured ? "Unfeature" : "Feature"}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(video.id)}
                          disabled={deletingId === video.id}
                          className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                        >
                          {deletingId === video.id ? (
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

export default YouTubeManager;