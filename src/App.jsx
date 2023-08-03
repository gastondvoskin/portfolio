import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <About />
      <br />
      <Projects />
      <br />
      <Skills />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}

export default App;
