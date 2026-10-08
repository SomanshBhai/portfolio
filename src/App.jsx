import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import YouTube from "./components/YouTube";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Terminal from "./components/Terminal";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import ScrollProgress from "./components/ScrollProgress";

import Cursor from "./components/Cursor";

import Background from "./components/Background";

import Footer from "./components/Footer";

import Projects from "./components/Projects";

import Skills from "./components/Skills";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import About from "./components/About";

import Contact from "./components/Contact";

import Tools from "./components/Tools";

import SmartCalculator from "./pages/projects/SmartCalculator";

import Portfolio from "./pages/projects/PortfolioProject";

import PlayerIntroduction from "./pages/projects/PlayerIntroduction";

import DeveloperHub from "./pages/projects/DeveloperHub";

import Login from "./pages/projects/Login";

import Admin from "./pages/projects/Admin";

import ProjectsManager from "./pages/projects/ProjectsManager";

import ProtectedRoute from "./components/ProtectedRoute";

import { ThemeProvider } from "./ThemeContext";

import ThemeSwitcher from "./components/ThemeSwitcher";

import ScrollToTop from "./components/ScrollToTop";

import AchievementsManager from "./pages/projects/achievements/AchievementsManager";

import EducationManager from "./pages/projects/education/EducationManager";

import YouTubeManager from "./pages/projects/youtube/YouTubeManager";

function PortfolioHome() {
  return (
    <>
      <ThemeSwitcher />

      <ScrollProgress />

      <Cursor />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <TechStack />

      <Education />

      <Projects />

      <Tools />

      <Terminal />

      <GithubStats />

      <Achievements />

      <YouTube />

      <Contact />

      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* Keep Background mounted before Loader to prevent startup glow flash */}
      <Background />

      <ScrollToTop />

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          {/* Developer Hub */}
          <Route path="/" element={<DeveloperHub />} />

          {/* Existing Portfolio */}
          <Route path="/portfolio" element={<PortfolioHome />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Admin Projects */}
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <ProjectsManager />
              </ProtectedRoute>
            }
          />

          {/* Admin Education */}
          <Route
            path="/admin/education"
            element={
              <ProtectedRoute>
                <EducationManager />
              </ProtectedRoute>
            }
          />

          {/* Admin Achievements */}
          <Route
            path="/admin/achievements"
            element={
              <ProtectedRoute>
                <AchievementsManager />
              </ProtectedRoute>
            }
          />

          {/* Admin YouTube */}
          <Route
            path="/admin/youtube"
            element={
              <ProtectedRoute>
                <YouTubeManager />
              </ProtectedRoute>
            }
          />

          {/* Project Pages */}
          <Route
            path="/projects/smart-calculator"
            element={<SmartCalculator />}
          />

          <Route
            path="/projects/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/projects/player-introduction"
            element={<PlayerIntroduction />}
          />
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;