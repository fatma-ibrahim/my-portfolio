export default function Footer() {
  return (
    <>
      <footer className="bg-gray-400 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Fatma Ibrahim. All rights
            reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/fatmaibrahim6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="mailto:fatmatag60@gmail.com"
              className="hover:text-gray-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
