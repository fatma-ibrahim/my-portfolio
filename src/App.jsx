import NavLinks from "./components/layout/NavLinks";
import Cover from "./components/pages/Cover";
import About from "./components/pages/About";
import Education from './components/pages/Education';
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="px-6 mx-6">
        <NavLinks />
        <main className="container mx-auto p-4 pt-20">
          <Cover />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
