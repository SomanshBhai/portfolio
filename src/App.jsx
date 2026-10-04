import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

import NoxBusted from "./pages/projects/NoxBusted";
import PortfolioProject from "./pages/projects/PortfolioProject";
import SmartCalculator from "./pages/projects/SmartCalculator";
import PlayerIntroduction from "./pages/projects/PlayerIntroduction";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function PortfolioHome() {
  const [loading, setLoading] = useState(true);

  // Always start at the top when the website loads
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

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      // Scroll to top again after loader disappears
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Background />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Education />
      <Projects />
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
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<PortfolioHome />} />

        <Route
          path="/projects/nox-busted"
          element={<NoxBusted />}
        />

        <Route
          path="/projects/portfolio"
          element={<PortfolioProject />}
        />

        <Route
          path="/projects/smart-calculator"
          element={<SmartCalculator />}
        />

        <Route
          path="/projects/player-introduction"
          element={<PlayerIntroduction />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
