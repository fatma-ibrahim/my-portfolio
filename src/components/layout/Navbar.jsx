export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto p-4 flex justify-around">
          <a href="#cover" className="text-blue-600 hover:text-blue-800">
            Home
          </a>
          <a href="#about" className="text-blue-600 hover:text-blue-800">
            About
          </a>
          <a href="#education" className="text-blue-600 hover:text-blue-800">
            Education
          </a>
          <a href="#skills" className="text-blue-600 hover:text-blue-800">
            Skills
          </a>
          <a href="#experience" className="text-blue-600 hover:text-blue-800">
            Experience
          </a>
          <a href="#services" className="text-blue-600 hover:text-blue-800">
            Services
          </a>
          <a href="#projects" className="text-blue-600 hover:text-blue-800">
            Projects
          </a>
          <a href="#contact" className="text-blue-600 hover:text-blue-800">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
