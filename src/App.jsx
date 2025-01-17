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
      <div className="lg:px-6 lg:mx-6">
        <NavLinks />
        <main className="container mx-auto p-4 md:p-6 lg:p-8 pt-20 md:pt-24 lg:pt-28 max-w-7xl">
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
