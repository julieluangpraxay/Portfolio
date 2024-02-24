import "./App.css";
import Projects from "./Components/Projects";
import "./index.css";
function App() {
  return (
    <>
      <div>
        <h1>Julie Luangpraxay</h1>
        <h3>Software Engineer</h3>
      </div>
      <div className="top-section">
        <img src="/images/Gif.gif" alt="" className="hero" />
      </div>
      <Projects />
    </>
  );
}

export default App;
