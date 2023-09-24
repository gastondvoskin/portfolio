import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Technologies from "./sections/Technologies";
import Phrases from "./sections/Phrases";

function App() {
  return (
    <div className="flex flex-col items-center text-mytext text-lg font-serif dark:text-mytextd">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Phrases />
      <Footer />
    </div>
  );
}

export default App;
