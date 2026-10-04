import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Loader from "./components/Loader";

import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import GithubStats from "./components/GithubStats";
import Achievements from "./components/Achievements";
import YouTube from "./components/YouTube";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import NoxBusted from "./pages/projects/NoxBusted";
import PortfolioProject from "./pages/projects/PortfolioProject";
import SmartCalculator from "./pages/projects/SmartCalculator";
import PlayerIntroduction from "./pages/projects/PlayerIntroduction";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function PortfolioHome() {
  return (
    <>
      <Loader />

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
        {/* Home */}
        <Route
          path="/"
          element={<PortfolioHome />}
        />

        {/* Project Pages */}
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
