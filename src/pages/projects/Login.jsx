import { useState } from "react";
import { motion } from "framer-motion";
import {
  LockKeyhole,
  Mail,
  ArrowLeft,
  UserPlus,
  LogIn,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../supabaseClient";

function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isLogin = mode === "login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isLogin) {
        const { error: signInError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (signInError) {
          throw signInError;
        }

        navigate("/admin");
      } else {
        const { data, error: signUpError } =
          await supabase.auth.signUp({
            email,
            password,
          });

        if (signUpError) {
          throw signUpError;
        }

        if (data.session) {
          navigate("/admin");
        } else {
          setMessage(
            "Account created! Check your email to confirm your account, then sign in."
          );

          setMode("login");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(isLogin ? "signup" : "login");
    setError("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-[var(--theme-muted)] hover:text-[var(--theme-accent)] transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div
          className="
            rounded-2xl
            border
            border-[var(--theme-border)]
            bg-[var(--theme-surface)]
            backdrop-blur-xl
            p-8
            shadow-2xl
          "
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
                mx-auto
                w-14
                h-14
                rounded-xl
                flex
                items-center
                justify-center
                border
                border-[var(--theme-border)]
                text-[var(--theme-accent)]
                bg-[var(--theme-background)]
                mb-5
              "
            >
              {isLogin ? (
                <LockKeyhole size={26} />
              ) : (
                <UserPlus size={26} />
              )}
            </motion.div>

            <h1 className="text-3xl font-bold text-[var(--theme-text)]">
              {isLogin ? "Admin Login" : "Create Account"}
            </h1>

            <p className="mt-2 text-sm text-[var(--theme-muted)]">
              {isLogin
                ? "Sign in to access the portfolio dashboard"
                : "Create an account to join the portfolio team"}
            </p>
          </div>

          {error && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-3
                text-sm
                text-red-400
              "
            >
              {error}
            </div>
          )}

          {message && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-[var(--theme-accent)]/30
                bg-[var(--theme-accent)]/10
                px-4
                py-3
                text-sm
                text-[var(--theme-accent)]
              "
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[var(--theme-text)]"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-[var(--theme-muted)]
                  "
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[var(--theme-border)]
                    bg-[var(--theme-background)]
                    text-[var(--theme-text)]
                    placeholder:text-[var(--theme-muted)]
                    pl-10
                    pr-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-[var(--theme-accent)]
                    focus:ring-2
                    focus:ring-[var(--theme-accent)]
                    focus:ring-opacity-20
                  "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[var(--theme-text)]"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-[var(--theme-muted)]
                  "
                />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  autoComplete={
                    isLogin ? "current-password" : "new-password"
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[var(--theme-border)]
                    bg-[var(--theme-background)]
                    text-[var(--theme-text)]
                    placeholder:text-[var(--theme-muted)]
                    pl-10
                    pr-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-[var(--theme-accent)]
                    focus:ring-2
                    focus:ring-[var(--theme-accent)]
                    focus:ring-opacity-20
                  "
                />
              </div>

              {!isLogin && (
                <p className="mt-2 text-xs text-[var(--theme-muted)]">
                  Password must be at least 6 characters.
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                py-3
                font-semibold
                text-[var(--theme-background)]
                bg-[var(--theme-accent)]
                hover:bg-[var(--theme-accent-strong)]
                transition-all
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <span className="inline-flex items-center justify-center gap-2">
                {loading ? (
                  "Please wait..."
                ) : isLogin ? (
                  <>
                    <LogIn size={18} />
                    Sign In
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    Create Account
                  </>
                )}
              </span>
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={switchMode}
              className="
                text-sm
                text-[var(--theme-muted)]
                hover:text-[var(--theme-accent)]
                transition-colors
              "
            >
              {isLogin
                ? "Don't have an account? Create one"
                : "Already have an account? Sign in"}
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-[var(--theme-muted)]">
            {isLogin
              ? "Protected portfolio administration"
              : "New accounts will require authorization before receiving admin permissions."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;