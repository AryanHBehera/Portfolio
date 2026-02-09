import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <ProjectList />
        <Footer />
      </div>
    </>
  );
}

export default App;
