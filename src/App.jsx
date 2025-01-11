import Navbar from "./components/layout/Navbar";
import Cover from "./components/pages/Cover";
import About from "./components/pages/About";
import Education from './components/pages/Education';
import Skills from "./components/pages/Skills";
// import Experience from "./components/pages/Experience";
// import Projects from "./components/pages/Projects";
// import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="container mx-auto p-4 pt-20">
          <Cover />
          <About />
          <Education />
          <Skills />
          {/* <Experience />
          <Projects />
          <Contact /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
