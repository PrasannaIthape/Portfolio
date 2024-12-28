import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Resume from "./pages/resume";
import Project from "./pages/project";
import Contact from "./pages/contact";

import Footer from "./components/footer";
import Skills from "./pages/skills";
import Achievements from "./pages/achievements";
import Testimonials from "./pages/testimonials";
import Blog from "./pages/blog";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        {/* Uncomment and add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
