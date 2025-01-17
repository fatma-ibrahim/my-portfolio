import myImage from "../../assets/imgs/me.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

function Cover() {
  const linkedInUrl = "https://www.linkedin.com/in/fatmaibrahim6/";
  const githubUrl = "https://github.com/fatmaibrahim6"; // Add your GitHub URL here

  return (
    <>
      <section
        id="cover"
        className="flex flex-col md:flex-row items-center bg-gray-100"
      >
        <div className="w-full md:w-1/2 p-8 md:text-left">
          <h1 className="text-4xl font-bold mb-4">Fatma Ibrahim</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            React Web Development
          </h2>
          <p className="text-gray-700 text-lg">
            I am a computer science graduate. I am passionate about computers
            and fascinated by the art of creating websites. I love brainstorming
            ideas to craft visually appealing designs and constantly seek to
            learn new skills that enhance my abilities.
          </p>

          {/* Follow Me Section with Icons */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-lg font-semibold">Follow me:</span>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin className="w-8 h-8" /> {/* LinkedIn Icon */}
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub className="w-8 h-8" /> {/* GitHub Icon */}
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <img
            src={myImage}
            alt="Fatma Ibrahim"
            className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

export default Cover;