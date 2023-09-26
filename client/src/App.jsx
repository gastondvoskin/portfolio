import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Technologies from "./sections/Technologies";
import Quotes from "./sections/Quotes";

function App() {
  return (
    <div className="flex flex-col items-center text-mytext text-lg font-serif dark:text-mytextd">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
