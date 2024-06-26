import "./App.css";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ExperiencePage from "./Pages/ExperiencePage";
import HomeCard from "./Components/HomeCard";

import ContactPage from "./Pages/ContactPage";
import AboutMePage from "./Pages/AboutMePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
