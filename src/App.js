import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomeContent from "./pages/HomeContent";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index path="/" element={<HomeContent />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
