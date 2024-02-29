import "./App.css";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import ExperiencePage from "./Pages/ExperiencePage";
import HomeCard from "./Components/HomeCard";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
