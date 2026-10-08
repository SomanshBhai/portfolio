import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Compass,
  FolderKanban,
  Globe2,
  LayoutTemplate,
  Menu,
  Search,
  Sparkles,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import ThemeSwitcher from "../../components/ThemeSwitcher";

const ecosystemItems = [
  {
    icon: Globe2,
    title: "Profiles",
    shortTitle: "Identity",
    number: "01",
    description:
      "Build a public identity that brings your skills, links, projects, and personality together.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    shortTitle: "Work",
    number: "02",
    description:
      "Showcase the things you build with polished project pages and detailed case studies.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates",
    shortTitle: "Design",
    number: "03",
    description:
      "Start with beautiful portfolio designs and eventually create and share your own.",
  },
  {
    icon: Wrench,
    title: "Tools",
    shortTitle: "Utility",
    number: "04",
    description:
      "Use practical tools for developers, students, creators, and everyday digital work.",
  },
  {
    icon: Users,
    title: "Community",
    shortTitle: "People",
    number: "05",
    description:
      "Discover creators, developers, students, and builders creating interesting things.",
  },
  {
    icon: Compass,
    title: "Explore",
    shortTitle: "Discover",
    number: "06",
    description:
      "Find portfolios, projects, people, tools, resources, and new ideas across Klyro.",
  },
];

const workspaceItems = [
  { icon: Globe2, title: "Profile", value: "Your identity" },
  { icon: FolderKanban, title: "Projects", value: "Your work" },
  { icon: LayoutTemplate, title: "Templates", value: "Your style" },
];

const stats = [
  { value: "01", label: "Digital identity" },
  { value: "∞", label: "Things to build" },
  { value: "01", label: "Connected space" },
];

const navItems = [
  { label: "Explore", target: "ecosystem", icon: Compass },
  { label: "Tools", target: "ecosystem", icon: Wrench },
  { label: "Templates", target: "ecosystem", icon: LayoutTemplate },
  { label: "Community", target: "ecosystem", icon: Users },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

function DeveloperHub() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    setMobileMenuOpen(false);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--theme-background)] text-[var(--theme-text)]">
      {/* Lightweight background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[-180px] h-[360px] w-[360px] rounded-full bg-[var(--theme-accent)]/[0.055] blur-[55px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[240px] h-[330px] w-[330px] rounded-full bg-[var(--theme-accent-strong)]/[0.045] blur-[55px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.014]"
        style={{
          backgroundImage:
            "linear-gradient(var(--theme-border) 1px, transparent 1px), linear-gradient(90deg, var(--theme-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        {/* =========================================================
            NEXT-LEVEL NAVIGATION
        ========================================================== */}
        <header className="relative z-50 py-4 sm:py-5">
          <div className="flex h-[58px] items-center justify-between rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]/95 px-3 shadow-lg shadow-black/[0.035] backdrop-blur-sm sm:px-4">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Klyro home"
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] transition-transform duration-200 group-hover:scale-[1.03]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, color-mix(in srgb, var(--theme-accent) 16%, transparent), transparent 70%)",
                  }}
                />

                <Code2
                  size={20}
                  strokeWidth={2.2}
                  className="relative z-10 text-[var(--theme-accent)]"
                />
              </div>

              <div className="hidden xs:block">
                <p className="text-sm font-black tracking-tight">Klyro</p>

                <p className="text-[10px] text-[var(--theme-muted)]">
                  Build. Share. Explore.
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="group inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[var(--theme-muted)] transition-colors duration-150 hover:bg-[var(--theme-background)] hover:text-[var(--theme-text)]"
                  >
                    <Icon
                      size={14}
                      className="text-[var(--theme-muted)] transition-colors duration-150 group-hover:text-[var(--theme-accent)]"
                    />

                    {item.label}

                    <ChevronDown
                      size={12}
                      className="opacity-40"
                    />
                  </button>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollToSection("ecosystem")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-[var(--theme-muted)] transition-colors duration-150 hover:border-[var(--theme-border)] hover:bg-[var(--theme-background)] hover:text-[var(--theme-text)]"
                aria-label="Explore Klyro"
              >
                <Search size={17} />
              </button>

              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-4 py-2.5 text-xs font-bold transition-all duration-150 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/[0.045]"
              >
                Sign in
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/login"
                className="hidden rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] px-3.5 py-2.5 text-xs font-bold sm:inline-flex"
              >
                Sign in
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] text-[var(--theme-text)]"
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="absolute left-0 right-0 top-[70px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-2 shadow-xl shadow-black/[0.07] lg:hidden">
              <div className="grid gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToSection(item.target)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold text-[var(--theme-muted)] transition-colors duration-150 hover:bg-[var(--theme-background)] hover:text-[var(--theme-text)]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--theme-accent)]/10">
                        <Icon
                          size={15}
                          className="text-[var(--theme-accent)]"
                        />
                      </span>

                      {item.label}

                      <ArrowRight
                        size={14}
                        className="ml-auto opacity-40"
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-1 border-t border-[var(--theme-border)] pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent)] px-4 py-3 text-sm font-bold text-white"
                >
                  Sign in
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative grid items-center gap-12 pb-20 pt-10 sm:pt-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 lg:pb-28 lg:pt-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--theme-muted)]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--theme-accent)]/10">
                <Sparkles
                  size={12}
                  className="text-[var(--theme-accent)]"
                />
              </span>

              A new digital world for builders
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--theme-muted)]"
            >
              <span className="h-px w-8 bg-[var(--theme-accent)]" />
              Your digital space
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[3.35rem] font-black leading-[0.91] tracking-[-0.065em] sm:text-6xl lg:text-[5.8rem]"
            >
              Everything you
              <span className="block bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-strong)] bg-clip-text text-transparent">
                build. One place.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-7 text-[var(--theme-muted)] sm:text-lg sm:leading-8"
            >
              Klyro brings your digital identity, portfolios, projects,
              templates, tools, and community together in one connected
              space.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent)] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[var(--theme-accent)]/10 transition-transform duration-150 hover:-translate-y-0.5"
              >
                Explore Klyro

                <ArrowRight
                  size={17}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("ecosystem")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-5 py-3.5 text-sm font-semibold transition-colors duration-150 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/5"
              >
                <Compass size={17} />
                Discover Klyro
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--theme-muted)]"
            >
              {["Profiles", "Projects", "Templates", "Community"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl lg:translate-y-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[var(--theme-accent)]/[0.045] blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-xl shadow-black/[0.06]">
              <div className="flex items-center justify-between border-b border-[var(--theme-border)] bg-[var(--theme-background)]/35 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden text-[9px] font-medium text-[var(--theme-muted)] sm:inline">
                    Workspace
                  </span>

                  <div className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1 text-[10px] font-medium text-[var(--theme-muted)]">
                    klyro.space
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)]">
                        Your workspace
                      </p>
                    </div>

                    <p className="mt-1 text-lg font-black tracking-tight">
                      Everything connected.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                    <Zap
                      size={18}
                      className="text-[var(--theme-accent)]"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)]/50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--theme-accent)]/10">
                      <Code2
                        size={19}
                        className="relative z-10 text-[var(--theme-accent)]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="h-2.5 w-24 rounded-full bg-[var(--theme-accent)]/45" />
                      <div className="mt-2 h-2 w-36 max-w-full rounded-full bg-[var(--theme-border)]" />
                    </div>

                    <div className="hidden rounded-lg border border-[var(--theme-border)] px-2.5 py-1 text-[9px] font-semibold text-[var(--theme-muted)] sm:block">
                      PROFILE
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {workspaceItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)]/45 p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                          <Icon
                            size={17}
                            className="text-[var(--theme-accent)]"
                          />
                        </div>

                        <p className="mt-4 text-xs font-bold">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] text-[var(--theme-muted)]">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)]/45 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                    <Globe2
                      size={17}
                      className="text-[var(--theme-accent)]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold">
                        Connected ecosystem
                      </p>

                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[var(--theme-accent)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />
                        LIVE
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--theme-border)]">
                      <div className="h-full w-[82%] rounded-full bg-[var(--theme-accent)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lightweight floating labels */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                  <Sparkles
                    size={15}
                    className="text-[var(--theme-accent)]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold">Your digital world</p>
                  <p className="text-[10px] text-[var(--theme-muted)]">
                    Built around you.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-4 hidden rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-2 shadow-md sm:block">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />

                <span className="text-[10px] font-semibold text-[var(--theme-muted)]">
                  Everything in one place
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================
            STATS
        ========================================================== */}
        <section className="border-y border-[var(--theme-border)] py-7">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-4 px-4 text-center ${
                  index !== 0
                    ? "border-[var(--theme-border)] sm:border-l"
                    : ""
                }`}
              >
                <p className="text-2xl font-black tracking-tight text-[var(--theme-accent)]">
                  {stat.value}
                </p>

                <p className="text-xs font-semibold text-[var(--theme-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            ECOSYSTEM
        ========================================================== */}
        <section
          id="ecosystem"
          className="scroll-mt-10 py-20 sm:py-24"
        >
          <div>
            {/* Heading */}
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
                    <Sparkles
                      size={16}
                      className="text-[var(--theme-accent)]"
                    />
                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)]">
                    The Klyro ecosystem
                  </p>
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Your digital life,
                  <span className="block text-[var(--theme-accent)]">
                    connected.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  Klyro connects the different parts of your digital world —
                  from your identity and projects to the tools, templates, and
                  people around you.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-2 text-[10px] font-semibold text-[var(--theme-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />
                  One connected ecosystem
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="relative mt-10">
              <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ecosystemItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-sm transition-[border-color,transform,box-shadow] duration-150 hover:-translate-y-1 hover:border-[var(--theme-accent)]/25 hover:shadow-lg hover:shadow-black/[0.035]"
                    >
                      <div className="relative flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                          <Icon
                            size={20}
                            className="text-[var(--theme-accent)]"
                          />
                        </div>

                        <span className="text-[10px] font-black tracking-[0.18em] text-[var(--theme-muted)]">
                          {item.number}
                        </span>
                      </div>

                      <div className="relative">
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold">
                            {item.title}
                          </h3>

                          <span className="rounded-full border border-[var(--theme-border)] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[var(--theme-muted)]">
                            {item.shortTitle}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-[var(--theme-muted)]">
                          {item.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]">
                            Klyro space
                          </span>

                          <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-accent)]">
                            Explore
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connection strip */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]">
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                    <Globe2
                      size={17}
                      className="text-[var(--theme-accent)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Everything works together.
                    </p>

                    <p className="mt-1 text-[10px] text-[var(--theme-muted)]">
                      Identity → Creation → Discovery → Connection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 overflow-x-auto">
                  {ecosystemItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex shrink-0 items-center"
                      >
                        <div
                          title={item.title}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-background)]"
                        >
                          <Icon
                            size={13}
                            className="text-[var(--theme-accent)]"
                          />
                        </div>

                        {index !== ecosystemItems.length - 1 && (
                          <ArrowRight
                            size={11}
                            className="mx-1 text-[var(--theme-muted)]"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            KLYRO IDEA
        ========================================================== */}
        <section className="py-10 sm:py-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-7 shadow-sm sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-100px] top-[-100px] h-60 w-60 rounded-full bg-[var(--theme-accent)]/[0.045] blur-[55px]"
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-accent)]/10">
                  <Sparkles
                    size={20}
                    className="text-[var(--theme-accent)]"
                  />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)]">
                  The Klyro idea
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Your portfolio should be a world,
                  <span className="block text-[var(--theme-accent)]">
                    not just a page.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  Your identity, projects, portfolio, tools, templates, and
                  connections can all become part of one digital presence.
                  Klyro is being built around that idea.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:w-[330px]">
                {[
                  ["01", "Identity"],
                  ["02", "Creation"],
                  ["03", "Connection"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)]/50 p-4"
                  >
                    <p className="text-xs font-bold text-[var(--theme-accent)]">
                      {number}
                    </p>

                    <p className="mt-5 text-[10px] font-semibold leading-4 sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-accent)]/10">
              <Search
                size={21}
                className="text-[var(--theme-accent)]"
              />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)]">
              Start your journey
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Build something worth
              <span className="block text-[var(--theme-accent)]">
                being discovered.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
              Klyro is growing into a place where people can build their
              identity, showcase their work, discover others, and create their
              own digital world.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent)] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[var(--theme-accent)]/10 transition-transform duration-150 hover:-translate-y-0.5"
              >
                Enter Klyro

                <ArrowRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("ecosystem")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-5 py-3.5 text-sm font-semibold transition-colors duration-150 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/5"
              >
                Explore the ecosystem
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOOTER
        ========================================================== */}
        <footer className="border-t border-[var(--theme-border)] pt-7">
          <div className="flex flex-col gap-4 text-xs text-[var(--theme-muted)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-[var(--theme-text)]">Klyro</p>

              <p className="mt-1">Build. Share. Explore.</p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/portfolio"
                className="transition-colors duration-150 hover:text-[var(--theme-text)]"
              >
                Portfolio
              </Link>

              <Link
                to="/login"
                className="transition-colors duration-150 hover:text-[var(--theme-text)]"
              >
                Account
              </Link>
            </div>
          </div>

          <p className="mt-6 text-[10px] text-[var(--theme-muted)]">
            © {new Date().getFullYear()} Klyro. Built to grow.
          </p>
        </footer>
      </div>

      <ThemeSwitcher />

      <style>{`
        @media (max-width: 640px) {
          .klyro-heavy-motion {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default DeveloperHub;