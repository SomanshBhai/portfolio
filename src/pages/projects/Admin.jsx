import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  FolderKanban,
  LogOut,
  PlaySquare,
  RefreshCw,
  Shield,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../supabaseClient";

const managementItems = [
  {
    title: "Projects",
    description: "Manage portfolio projects and project information.",
    icon: FolderKanban,
    path: "/admin/projects",
  },
  {
    title: "Achievements",
    description: "Manage achievements, awards and milestones.",
    icon: Award,
    path: "/admin/achievements",
  },
  {
    title: "Education",
    description: "Manage education and academic information.",
    icon: BookOpen,
    path: "/admin/education",
  },
  {
    title: "YouTube",
    description: "Manage YouTube channels, videos and content.",
    icon: PlaySquare,
    path: "/admin/youtube",
  },
];

const roleOptions = ["user", "contributor", "admin", "owner"];

function Admin() {
  const navigate = useNavigate();

  const [stats, setStats] = useState([
    {
      title: "Projects",
      value: 0,
      icon: FolderKanban,
    },
    {
      title: "Achievements",
      value: 0,
      icon: Award,
    },
    {
      title: "Education",
      value: 0,
      icon: BookOpen,
    },
    {
      title: "YouTube",
      value: 0,
      icon: PlaySquare,
    },
  ]);

  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState("");

  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [usersError, setUsersError] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [updatingUserId, setUpdatingUserId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const loadStats = async () => {
    setStatsLoading(true);
    setStatsError("");

    try {
      const [projectsResult, achievementsResult, educationResult, youtubeResult] =
        await Promise.all([
          supabase
            .from("projects")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("achievements")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("education")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("youtube")
            .select("*", { count: "exact", head: true }),
        ]);

      if (projectsResult.error) {
        throw projectsResult.error;
      }

      if (achievementsResult.error) {
        throw achievementsResult.error;
      }

      if (educationResult.error) {
        throw educationResult.error;
      }

      if (youtubeResult.error) {
        throw youtubeResult.error;
      }

      setStats([
        {
          title: "Projects",
          value: projectsResult.count || 0,
          icon: FolderKanban,
        },
        {
          title: "Achievements",
          value: achievementsResult.count || 0,
          icon: Award,
        },
        {
          title: "Education",
          value: educationResult.count || 0,
          icon: BookOpen,
        },
        {
          title: "YouTube",
          value: youtubeResult.count || 0,
          icon: PlaySquare,
        },
      ]);
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);

      setStatsError(
        error?.message ||
          "Failed to load dashboard statistics. Please try again."
      );
    } finally {
      setStatsLoading(false);
    }
  };

  const loadUsers = async () => {
    setUsersLoading(true);
    setUsersError("");
    setSuccessMessage("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        throw authError;
      }

      if (!user) {
        navigate("/login", { replace: true });
        return;
      }

      setCurrentUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, display_name, role, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setUsers(data || []);

      const currentProfile = (data || []).find(
        (profile) => profile.id === user.id
      );

      if (currentProfile) {
        setCurrentUserRole(currentProfile.role);
      }
    } catch (error) {
      console.error("Failed to load users:", error);
      setUsersError(
        error?.message || "Failed to load users. Please try again."
      );
    } finally {
      setUsersLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
    loadUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    if (currentUserRole !== "owner") {
      return;
    }

    if (userId === currentUserId) {
      return;
    }

    setUpdatingUserId(userId);
    setUsersError("");
    setSuccessMessage("");

    try {
      const { data, error } = await supabase.rpc("set_user_role", {
        target_user_id: userId,
        new_role: newRole,
      });

      if (error) {
        throw error;
      }

      const updatedProfile = Array.isArray(data) ? data[0] : data;

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === userId
            ? {
                ...user,
                role: updatedProfile?.role || newRole,
              }
            : user
        )
      );

      setSuccessMessage("User role updated successfully.");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to update user role:", error);
      setUsersError(
        error?.message || "Failed to update user role. Please try again."
      );
    } finally {
      setUpdatingUserId(null);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error);
      return;
    }

    navigate("/login", { replace: true });
  };

  const handleRefresh = async () => {
    await Promise.all([loadStats(), loadUsers()]);
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getRoleClasses = (role) => {
    switch (role) {
      case "owner":
        return "border-[var(--theme-accent)] text-[var(--theme-accent)]";

      case "admin":
        return "border-blue-500/40 text-blue-400";

      case "contributor":
        return "border-purple-500/40 text-purple-400";

      default:
        return "border-[var(--theme-border)] text-[var(--theme-muted)]";
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
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-[var(--theme-accent)]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-[var(--theme-muted)] md:text-base">
              Manage your portfolio content from one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)]"
            >
              <ArrowLeft size={17} />
              Portfolio
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)]"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </motion.header>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-[var(--theme-accent)]">
                    <Icon size={20} />
                  </div>

                  <span className="text-2xl font-bold">
                    {statsLoading ? (
                      <RefreshCw
                        size={20}
                        className="animate-spin text-[var(--theme-muted)]"
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                </div>

                <p className="text-sm text-[var(--theme-muted)]">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </section>

        {statsError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {statsError}
          </motion.div>
        )}

        {/* Management */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">Manage Content</h2>

            <p className="mt-1 text-sm text-[var(--theme-muted)]">
              Choose a section to manage your portfolio data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {managementItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="group rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-[var(--theme-accent)]">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--theme-muted)]">
                    {item.description}
                  </p>

                  {item.path ? (
                    <Link
                      to={item.path}
                      className="mt-5 inline-flex rounded-xl border border-[var(--theme-border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                    >
                      Manage
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-5 cursor-not-allowed rounded-xl border border-[var(--theme-border)] px-4 py-2 text-sm font-medium opacity-50"
                    >
                      Coming Soon
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Users & Roles */}
        <section>
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-accent)]">
                  <Users size={21} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Users & Roles
                  </h2>

                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    Manage accounts and permissions.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={usersLoading || statsLoading}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={16}
                className={
                  usersLoading || statsLoading ? "animate-spin" : ""
                }
              />
              Refresh
            </button>
          </div>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
            >
              <Check size={17} />
              {successMessage}
            </motion.div>
          )}

          {usersError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              {usersError}
            </motion.div>
          )}

          <div className="overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
            {usersLoading ? (
              <div className="flex min-h-40 items-center justify-center">
                <div className="flex items-center gap-3 text-sm text-[var(--theme-muted)]">
                  <RefreshCw size={18} className="animate-spin" />
                  Loading users...
                </div>
              </div>
            ) : users.length === 0 ? (
              <div className="flex min-h-40 items-center justify-center px-6 text-center">
                <div>
                  <Users
                    size={28}
                    className="mx-auto mb-3 text-[var(--theme-muted)]"
                  />

                  <p className="font-medium">
                    No users found
                  </p>

                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    There are no profiles available yet.
                  </p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="border-b border-[var(--theme-border)]">
                    <tr className="text-xs uppercase tracking-wider text-[var(--theme-muted)]">
                      <th className="px-5 py-4 font-medium">
                        User
                      </th>

                      <th className="px-5 py-4 font-medium">
                        Role
                      </th>

                      <th className="px-5 py-4 font-medium">
                        Created
                      </th>

                      <th className="px-5 py-4 text-right font-medium">
                        Permission
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user, index) => {
                      const isCurrentUser = user.id === currentUserId;
                      const canEditRole =
                        currentUserRole === "owner" && !isCurrentUser;

                      return (
                        <motion.tr
                          key={user.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.04,
                          }}
                          className="border-b border-[var(--theme-border)] last:border-b-0"
                        >
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-sm font-bold text-[var(--theme-accent)]">
                                {(
                                  user.display_name ||
                                  user.email ||
                                  "U"
                                )
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>

                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="truncate font-medium">
                                    {user.display_name || "Unnamed user"}
                                  </p>

                                  {isCurrentUser && (
                                    <span className="rounded-full border border-[var(--theme-accent)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--theme-accent)]">
                                      You
                                    </span>
                                  )}
                                </div>

                                <p className="mt-1 truncate text-sm text-[var(--theme-muted)]">
                                  {user.email || "No email"}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-5">
                            {canEditRole ? (
                              <select
                                value={user.role}
                                onChange={(event) =>
                                  handleRoleChange(
                                    user.id,
                                    event.target.value
                                  )
                                }
                                disabled={updatingUserId === user.id}
                                className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-background)] px-3 py-2 text-sm capitalize text-[var(--theme-text)] outline-none transition focus:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                {roleOptions.map((role) => (
                                  <option key={role} value={role}>
                                    {role}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span
                                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium capitalize ${getRoleClasses(
                                  user.role
                                )}`}
                              >
                                {user.role}
                              </span>
                            )}
                          </td>

                          <td className="px-5 py-5 text-sm text-[var(--theme-muted)]">
                            {formatDate(user.created_at)}
                          </td>

                          <td className="px-5 py-5 text-right">
                            {updatingUserId === user.id ? (
                              <span className="inline-flex items-center gap-2 text-xs text-[var(--theme-muted)]">
                                <RefreshCw
                                  size={14}
                                  className="animate-spin"
                                />
                                Updating...
                              </span>
                            ) : isCurrentUser ? (
                              <span className="inline-flex items-center gap-2 text-xs text-[var(--theme-muted)]">
                                <Shield size={14} />
                                Protected
                              </span>
                            ) : currentUserRole === "owner" ? (
                              <span className="inline-flex items-center gap-2 text-xs text-[var(--theme-muted)]">
                                <Shield size={14} />
                                Owner control
                              </span>
                            ) : (
                              <span className="text-xs text-[var(--theme-muted)]">
                                View only
                              </span>
                            )}
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;