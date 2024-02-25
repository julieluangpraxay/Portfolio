import "./App.css";
import Projects from "./Components/Projects";

import "./index.css";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center p-8">
        <h1 className="text-5xl p-2">Julie Luangpraxay</h1>
        <h3 className="text-xl p-2">Software Engineer</h3>
      </div>

      <img
        src="/images/Gif.gif"
        alt=""
        className="w-3/4 flex justify-center m-auto"
      />

      <Projects />
    </>
  );
}

export default App;
