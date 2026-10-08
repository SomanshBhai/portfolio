import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Check,
  Edit,
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  Plus,
  RefreshCw,
  Save,
  Star,
  Trash2,
  X,
} from "lucide-react";

import { supabase } from "../../../supabaseClient";

const emptyForm = {
  title: "",
  description: "",
  image_url: "",
  date: "",
  link_url: "",
  featured: false,
  sort_order: 0,
};

function AchievementsManager() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const showMessage = (type, text) => {
    setMessage({ type, text });

    window.setTimeout(() => {
      setMessage({
        type: "",
        text: "",
      });
    }, 3500);
  };

  const loadAchievements = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("achievements")
      .select(
        `
          id,
          title,
          description,
          image_url,
          date,
          link_url,
          featured,
          sort_order,
          created_at,
          updated_at
        `
      )
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading achievements:", error);
      showMessage("error", error.message);
      setAchievements([]);
    } else {
      setAchievements(data || []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadAchievements();
  }, [loadAchievements]);

  const openAddForm = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      sort_order: achievements.length + 1,
    });
    setShowForm(true);
    setMessage({
      type: "",
      text: "",
    });
  };

  const openEditForm = (achievement) => {
    setEditingId(achievement.id);

    setForm({
      title: achievement.title || "",
      description: achievement.description || "",
      image_url: achievement.image_url || "",
      date: achievement.date || "",
      link_url: achievement.link_url || "",
      featured: Boolean(achievement.featured),
      sort_order: achievement.sort_order ?? 0,
    });

    setShowForm(true);
    setMessage({
      type: "",
      text: "",
    });
  };

  const closeForm = () => {
    if (saving) return;

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = form.title.trim();
    const description = form.description.trim();
    const imageUrl = form.image_url.trim();
    const date = form.date.trim();
    const linkUrl = form.link_url.trim();

    if (!title) {
      showMessage("error", "Achievement title is required.");
      return;
    }

    if (!description) {
      showMessage("error", "Achievement description is required.");
      return;
    }

    const parsedSortOrder = Number(form.sort_order);

    if (!Number.isFinite(parsedSortOrder)) {
      showMessage("error", "Sort order must be a valid number.");
      return;
    }

    setSaving(true);

    const payload = {
      title,
      description,
      image_url: imageUrl || null,
      date: date || null,
      link_url: linkUrl || null,
      featured: Boolean(form.featured),
      sort_order: parsedSortOrder,
      updated_at: new Date().toISOString(),
    };

    let error = null;

    if (editingId) {
      const result = await supabase
        .from("achievements")
        .update(payload)
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase.from("achievements").insert([
        {
          ...payload,
          created_at: new Date().toISOString(),
        },
      ]);

      error = result.error;
    }

    setSaving(false);

    if (error) {
      console.error("Error saving achievement:", error);
      showMessage("error", error.message);
      return;
    }

    showMessage(
      "success",
      editingId
        ? "Achievement updated successfully."
        : "Achievement created successfully."
    );

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);

    await loadAchievements();
  };

  const handleDelete = async (achievement) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${achievement.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    setDeletingId(achievement.id);

    const { error } = await supabase
      .from("achievements")
      .delete()
      .eq("id", achievement.id);

    setDeletingId(null);

    if (error) {
      console.error("Error deleting achievement:", error);
      showMessage("error", error.message);
      return;
    }

    showMessage("success", "Achievement deleted successfully.");

    await loadAchievements();
  };

  const toggleFeatured = async (achievement) => {
    setTogglingId(achievement.id);

    const { error } = await supabase
      .from("achievements")
      .update({
        featured: !achievement.featured,
        updated_at: new Date().toISOString(),
      })
      .eq("id", achievement.id);

    setTogglingId(null);

    if (error) {
      console.error("Error updating featured status:", error);
      showMessage("error", error.message);
      return;
    }

    setAchievements((previous) =>
      previous.map((item) =>
        item.id === achievement.id
          ? {
              ...item,
              featured: !item.featured,
            }
          : item
      )
    );

    showMessage(
      "success",
      achievement.featured
        ? "Achievement removed from featured."
        : "Achievement marked as featured."
    );
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    background: "var(--theme-surface)",
                    borderColor: "var(--theme-border)",
                    color: "var(--theme-accent)",
                  }}
                >
                  <Award size={22} />
                </div>

                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    Admin Management
                  </p>

                  <h1
                    className="text-3xl font-bold sm:text-4xl"
                    style={{ color: "var(--theme-text)" }}
                  >
                    Achievements
                  </h1>
                </div>
              </div>

              <p
                className="max-w-2xl text-sm sm:text-base"
                style={{ color: "var(--theme-muted)" }}
              >
                Create, edit, organize, feature, and remove achievements
                displayed on your portfolio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={loadAchievements}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  background: "var(--theme-surface)",
                  borderColor: "var(--theme-border)",
                  color: "var(--theme-text)",
                }}
              >
                <RefreshCw
                  size={17}
                  className={loading ? "animate-spin" : ""}
                />
                Refresh
              </button>

              <button
                type="button"
                onClick={openAddForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition"
                style={{
                  background: "var(--theme-accent)",
                  color: "var(--theme-background)",
                }}
              >
                <Plus size={18} />
                Add Achievement
              </button>
            </div>
          </div>
        </motion.div>

        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm"
            style={{
              background: "var(--theme-surface)",
              borderColor:
                message.type === "error"
                  ? "#ef4444"
                  : "var(--theme-accent)",
              color: "var(--theme-text)",
            }}
          >
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  message.type === "error"
                    ? "#ef4444"
                    : "var(--theme-accent)",
                color: "var(--theme-background)",
              }}
            >
              {message.type === "error" ? (
                <X size={15} />
              ) : (
                <Check size={15} />
              )}
            </div>

            <span>{message.text}</span>
          </motion.div>
        )}

        {showForm && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 overflow-hidden rounded-2xl border"
            style={{
              background: "var(--theme-surface)",
              borderColor: "var(--theme-border)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-5 py-4"
              style={{ borderColor: "var(--theme-border)" }}
            >
              <div>
                <h2
                  className="text-lg font-bold"
                  style={{ color: "var(--theme-text)" }}
                >
                  {editingId ? "Edit Achievement" : "Add Achievement"}
                </h2>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--theme-muted)" }}
                >
                  {editingId
                    ? "Update the selected achievement."
                    : "Add a new achievement to your portfolio."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                disabled={saving}
                className="rounded-lg p-2 transition disabled:opacity-50"
                style={{ color: "var(--theme-muted)" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    Title
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. Completed Python Foundation"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <div className="lg:col-span-2">
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    Description
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe the achievement..."
                    className="w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="image_url"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    <ImageIcon size={16} />
                    Image URL
                  </label>

                  <input
                    id="image_url"
                    name="image_url"
                    type="url"
                    value={form.image_url}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    <Calendar size={16} />
                    Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="text"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="e.g. September 2026"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="link_url"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    <LinkIcon size={16} />
                    Link URL
                  </label>

                  <input
                    id="link_url"
                    name="link_url"
                    type="url"
                    value={form.link_url}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sort_order"
                    className="mb-2 block text-sm font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    Sort Order
                  </label>

                  <input
                    id="sort_order"
                    name="sort_order"
                    type="number"
                    value={form.sort_order}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: "var(--theme-background)",
                      borderColor: "var(--theme-border)",
                      color: "var(--theme-text)",
                    }}
                  />
                </div>

                <label
                  className="flex cursor-pointer items-center gap-3 rounded-xl border p-4"
                  style={{
                    background: "var(--theme-background)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <input
                    type="checkbox"
                    name="featured"
                    checked={form.featured}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[var(--theme-accent)]"
                  />

                  <div>
                    <p
                      className="flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--theme-text)" }}
                    >
                      <Star size={16} />
                      Featured Achievement
                    </p>

                    <p
                      className="mt-1 text-xs"
                      style={{ color: "var(--theme-muted)" }}
                    >
                      Mark this achievement as featured.
                    </p>
                  </div>
                </label>
              </div>

              <div
                className="mt-6 flex flex-wrap justify-end gap-3 border-t pt-5"
                style={{ borderColor: "var(--theme-border)" }}
              >
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition disabled:opacity-50"
                  style={{
                    borderColor: "var(--theme-border)",
                    color: "var(--theme-text)",
                  }}
                >
                  <X size={17} />
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
                  style={{
                    background: "var(--theme-accent)",
                    color: "var(--theme-background)",
                  }}
                >
                  {saving ? (
                    <>
                      <RefreshCw size={17} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={17} />
                      {editingId ? "Save Changes" : "Create Achievement"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.section>
        )}

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2
                className="text-xl font-bold"
                style={{ color: "var(--theme-text)" }}
              >
                All Achievements
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--theme-muted)" }}
              >
                {achievements.length}{" "}
                {achievements.length === 1 ? "achievement" : "achievements"}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-72 animate-pulse rounded-2xl border"
                  style={{
                    background: "var(--theme-surface)",
                    borderColor: "var(--theme-border)",
                  }}
                />
              ))}
            </div>
          ) : achievements.length === 0 ? (
            <div
              className="rounded-2xl border px-6 py-14 text-center"
              style={{
                background: "var(--theme-surface)",
                borderColor: "var(--theme-border)",
              }}
            >
              <Award
                size={42}
                className="mx-auto mb-4"
                style={{ color: "var(--theme-muted)" }}
              />

              <h3
                className="text-lg font-bold"
                style={{ color: "var(--theme-text)" }}
              >
                No achievements yet
              </h3>

              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: "var(--theme-muted)" }}
              >
                Create your first achievement to start managing this section
                dynamically.
              </p>

              <button
                type="button"
                onClick={openAddForm}
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
                style={{
                  background: "var(--theme-accent)",
                  color: "var(--theme-background)",
                }}
              >
                <Plus size={17} />
                Add Achievement
              </button>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {achievements.map((achievement, index) => (
                <motion.article
                  key={achievement.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-2xl border"
                  style={{
                    background: "var(--theme-surface)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  {achievement.image_url ? (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={achievement.image_url}
                        alt={achievement.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      {achievement.featured && (
                        <div
                          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
                          style={{
                            background: "var(--theme-accent)",
                            color: "var(--theme-background)",
                          }}
                        >
                          <Star size={12} fill="currentColor" />
                          Featured
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="flex aspect-video items-center justify-center border-b"
                      style={{
                        background: "var(--theme-background)",
                        borderColor: "var(--theme-border)",
                      }}
                    >
                      <Award
                        size={48}
                        style={{ color: "var(--theme-accent)" }}
                      />

                      {achievement.featured && (
                        <div
                          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
                          style={{
                            background: "var(--theme-accent)",
                            color: "var(--theme-background)",
                          }}
                        >
                          <Star size={12} fill="currentColor" />
                          Featured
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3
                          className="truncate text-lg font-bold"
                          style={{ color: "var(--theme-text)" }}
                        >
                          {achievement.title}
                        </h3>

                        <div
                          className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
                          style={{ color: "var(--theme-muted)" }}
                        >
                          {achievement.date && (
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={13} />
                              {achievement.date}
                            </span>
                          )}

                          <span>
                            Order: {achievement.sort_order}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className="line-clamp-3 min-h-[60px] text-sm leading-6"
                      style={{ color: "var(--theme-muted)" }}
                    >
                      {achievement.description}
                    </p>

                    <div
                      className="mt-5 flex flex-wrap gap-2 border-t pt-4"
                      style={{ borderColor: "var(--theme-border)" }}
                    >
                      <button
                        type="button"
                        onClick={() => openEditForm(achievement)}
                        className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition"
                        style={{
                          borderColor: "var(--theme-border)",
                          color: "var(--theme-text)",
                        }}
                      >
                        <Edit size={14} />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleFeatured(achievement)}
                        disabled={togglingId === achievement.id}
                        className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
                        style={{
                          borderColor: "var(--theme-border)",
                          color: achievement.featured
                            ? "var(--theme-accent)"
                            : "var(--theme-muted)",
                        }}
                      >
                        {togglingId === achievement.id ? (
                          <RefreshCw size={14} className="animate-spin" />
                        ) : (
                          <Star
                            size={14}
                            fill={
                              achievement.featured ? "currentColor" : "none"
                            }
                          />
                        )}

                        {achievement.featured ? "Featured" : "Feature"}
                      </button>

                      {achievement.link_url && (
                        <a
                          href={achievement.link_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition"
                          style={{
                            borderColor: "var(--theme-border)",
                            color: "var(--theme-accent)",
                          }}
                        >
                          <ExternalLink size={14} />
                          Link
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDelete(achievement)}
                        disabled={deletingId === achievement.id}
                        className="ml-auto inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
                        style={{
                          borderColor: "#ef4444",
                          color: "#ef4444",
                        }}
                      >
                        {deletingId === achievement.id ? (
                          <RefreshCw size={14} className="animate-spin" />
                        ) : (
                          <Trash2 size={14} />
                        )}

                        Delete
                      </button>
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

export default AchievementsManager;