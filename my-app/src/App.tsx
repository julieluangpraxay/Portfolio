import "./App.css";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Nav from "./Components/Nav";
import ExperiencePage from "./Pages/ExperiencePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
