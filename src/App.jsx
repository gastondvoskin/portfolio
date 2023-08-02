import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  const data = import.meta.env.VITE_DATAOWNER;

  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
