import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Loader from "./components/Loader.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";

const PortfolioLayout = () => (
  <div className="relative">
    <Background />
    <Navbar />
    <main>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;