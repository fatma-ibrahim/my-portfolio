import { Button } from "../ui/button";
import myImage from "../../assets/imgs/me.jpg";


function Cover() {
  const linkedInUrl = "https://www.linkedin.com/in/fatmaibrahim6/";

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
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            Add me on LinkedIn
          </Button>
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
