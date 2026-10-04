import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import YouTube from "./components/YouTube";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Terminal from "./components/Terminal";
import Tools from "./components/Tools";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Calculator from "./pages/tools/Calculator";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Tools />
              <Achievements />
              <GithubStats />
              <YouTube />
              <Terminal />
              <Contact />
            </>
          }
        />

        {/* Calculator */}
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
