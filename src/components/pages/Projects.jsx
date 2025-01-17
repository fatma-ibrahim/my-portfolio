import { Card, CardContent, CardHeader } from "@/components/ui/card";
import fintessTracker from "../../assets/imgs/Fintness Tracker.png";
import courseList from "../../assets/imgs/Course List.png";
import newsApp from "../../assets/imgs/News App.png";

function Projects() {
  return (
    <>
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Card className="w-full md:w-1/4 p-4 m-3 text-center">
            <CardHeader>
              <img
                src={fintessTracker}
                alt="Fitness Tracker"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Fitness Tracker</p>
            </CardContent>
          </Card>

          <Card className="w-full md:w-1/4 p-4 m-3 text-center">
            <CardHeader>
              <img
                src={courseList}
                alt="Course List"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Course List</p>
            </CardContent>
          </Card>

          <Card className="w-full md:w-1/4 p-4 m-3 text-center">
            <CardHeader>
              <img
                src={newsApp}
                alt="News App"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">News App</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">Fitness Tracker</h1>
            <p className="mt-4">
              <strong>Description:</strong> A SaaS fitness app for fitness businesses, enabling users to choose workouts, set goals, and track health metrics like weight, steps, sleep, water, and calories in real-time.
            </p>
            <p className="mt-4">
              <strong>Technologies Used:</strong> React, Bootstrap, Node.js, Express, MongoDB, JWT, Vercel.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <strong>Features:</strong>
              <li>User Authentication</li>
              <li>General Progress Tracking</li>
              <li>Goals Progress Tracking</li>
              <li>User-defined Goals</li>
              <li>Log Data</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={fintessTracker}
              alt="Fitness Tracker"
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">Course List</h1>
            <p className="mt-4">
              <strong>Description:</strong> The &quot;Course List&quot; app is a web platform for managing courses, allowing users to add, edit, and delete courses. Each course includes details like title, price, instructor, and description, with actions triggering custom success or error messages.
            </p>
            <p className="mt-4">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>HTML: </strong>For structuring the page content.</li>
              <li><strong>CSS (Bootstrap): </strong>For styling and layout, including responsive design.</li>
              <li><strong>JavaScript (ES6): </strong>Provides the core functionality for course management, such as adding, updating, deleting, and validation.</li>
              <li><strong>Font Awesome: </strong>Used for icons in alert messages to improve visual feedback.</li>
            </ul>

            <ul className="mt-4 list-disc list-inside">
              <strong>Features:</strong>
              <li>Add Course</li>
              <li>Edit Course</li>
              <li>Delete Course</li>
              <li>Input Validation</li>
              <li>Custom Alerts</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={courseList}
              alt="Course List"
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">News App</h1>
            <p className="mt-4">
              <strong>Description:</strong> NewsApp is a responsive React web app that aggregates technology and science news, featuring a clean card-based layout for easy browsing, with quick access to article titles, authors, and summaries. Users can read full articles on source websites or explore detailed views within the app.
            </p>
            <p className="mt-4">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>Frontend Framework: </strong>React</li>
              <li><strong>Routing: </strong>React Router for single-page navigation between categories, article details, and contact pages.</li>
              <li><strong>Styling: </strong>Bootstrap for responsive design and consistent styling across components.</li>
              <li><strong>API Integration: </strong>News API for fetching real-time news articles in specified categories (technology and science).</li>
              <li><strong>Email Service: </strong>EmailJS for managing contact form submissions without a backend server.</li>
            </ul>

            <ul className="mt-4 list-disc list-inside">
              <li><strong>Dynamic Content Loading: </strong>Fetches real-time news from the News API based on Technology and Science categories.</li>
              <li><strong>Category-Based Navigation: </strong>Users can easily switch between Technology and Science news sections.</li>
              <li><strong>Card-Based Layout: </strong>Bootstrap for responsive design and consistent styling across components.</li>
              <li><strong>Pagination: </strong>Users can navigate through multiple article pages with &quot;Previous&quot; and &quot;Next&quot; buttons.</li>
              <li><strong>Detailed Article View: </strong>The &quot;Details&quot; button shows full content within the app, with a &quot;Read Full Article&quot; link to the source.</li>
              <li><strong>Contact Form: </strong>Users can send messages using EmailJS for feedback or support.</li>
              <li><strong>Responsive Design: </strong>Mobile-friendly design for optimal viewing on all devices.</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={newsApp}
              alt="News App"
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;