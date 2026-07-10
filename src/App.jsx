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

function App() {
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

export default App;