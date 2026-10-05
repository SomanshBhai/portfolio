import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function Home() {
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
      <BrowserRouter>
        {/* Keep the background mounted from the first render */}
        <Background />

        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/projects/smart-calculator"
              element={<SmartCalculator />}
            />

            <Route
              path="/projects/portfolio"
              element={<Portfolio />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
