import { Card, CardContent, CardHeader } from "@/components/ui/card";
import fintessTracker from "../../assets/imgs/Fitness Tracker.png";
import courseList from "../../assets/imgs/Course List.png";
import newsApp from "../../assets/imgs/News App.png";
import contactMap from "../../assets/imgs/Contact Form with Map Integration.png"
import moodMate from "../../assets/imgs/Interactive Mood Tracker – “MoodMate“.png"

function Projects() {
  return (
    <>
      <section id="projects" className="py-4 md:py-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="w-full p-4 text-center">
            <CardHeader>
              <img
                src={fintessTracker}
                alt="Fitness Tracker"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg md:text-xl">Fitness Tracker</p>
            </CardContent>
          </Card>

          <Card className="w-full p-4 text-center">
            <CardHeader>
              <img
                src={courseList}
                alt="Course List"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg md:text-xl">Course List</p>
            </CardContent>
          </Card>

          <Card className="w-full p-4 text-center">
            <CardHeader>
              <img
                src={newsApp}
                alt="News App"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg md:text-xl">News App</p>
            </CardContent>
          </Card>

          <Card className="w-full p-4 text-center">
            <CardHeader>
              <img
                src={contactMap}
                alt="Contact Form with Map Integration"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg md:text-xl">Contact Form with Map Integration</p>
            </CardContent>
          </Card>

          <Card className="w-full p-4 text-center">
            <CardHeader>
              <img
                src={moodMate}
                alt="Interactive Mood Tracker – 'MoodMate'"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg md:text-xl">Interactive Mood Tracker – &quot;MoodMate&quot;</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Fitness Tracker
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Description:</strong> A SaaS fitness app for fitness businesses, enabling users to choose workouts, set goals, and track health metrics like weight, steps, sleep, water, and calories in real-time.
            </p>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Technologies Used:</strong> React, Bootstrap, Node.js, Express, MongoDB, JWT, Vercel.
            </p>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
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
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Course List
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Description:</strong> The &quot;Course List&quot; app is a web platform for managing courses, allowing users to add, edit, and delete courses. Each course includes details like title, price, instructor, and description, with actions triggering custom success or error messages.
            </p>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <li><strong>HTML: </strong>For structuring the page content.</li>
              <li><strong>CSS (Bootstrap): </strong>For styling and layout, including responsive design.</li>
              <li><strong>JavaScript (ES6): </strong>Provides the core functionality for course management, such as adding, updating, deleting, and validation.</li>
              <li><strong>Font Awesome: </strong>Used for icons in alert messages to improve visual feedback.</li>
            </ul>

            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
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
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              News App
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Description:</strong> NewsApp is a responsive React web app that aggregates technology and science news, featuring a clean card-based layout for easy browsing, with quick access to article titles, authors, and summaries. Users can read full articles on source websites or explore detailed views within the app.
            </p>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <li><strong>Frontend Framework: </strong>React</li>
              <li><strong>Routing: </strong>React Router for single-page navigation between categories, article details, and contact pages.</li>
              <li><strong>Styling: </strong>Bootstrap for responsive design and consistent styling across components.</li>
              <li><strong>API Integration: </strong>News API for fetching real-time news articles in specified categories (technology and science).</li>
              <li><strong>Email Service: </strong>EmailJS for managing contact form submissions without a backend server.</li>
            </ul>

            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
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
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Contact Form with Map Integration
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Description:</strong> The LocaConnect project is a modern, responsive web page that combines a functional contact form with a live Google Map. It enables users to easily send messages while viewing the business’s location directly on the same page. The design emphasizes accessibility, input validation, and a clean, professional layout for an enhanced user experience.
            </p>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <li><strong>HTML5: </strong>Structured the layout for the contact form and map section.</li>
              <li><strong>CSS3: </strong>Styled the components with a clean, minimal interface and added responsive behavior using media queries.</li>
              <li><strong>JavaScript (ES6): </strong>Implemented real-time form validation and user feedback through interactive alerts.</li>
              <li><strong>Google Maps Embed API: </strong>Integrated an interactive map to display the physical location.</li>
            </ul>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <strong>Features:</strong>
              <li>Responsive layout that adapts to all screen sizes</li>
              <li>Real-time validation for name, email, and message fields</li>
              <li>Dynamic error and success alerts for user feedback</li>
              <li>Embedded interactive Google Map for location context</li>
              <li>Simple, modern UI with smooth usability</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={contactMap}
              alt="Contact Form with Map Integration"
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Interactive Mood Tracker – &quot;MoodMate&quot;
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Description:</strong> The MoodMate project is a responsive and interactive web app that allows users to express their current mood by selecting from a set of animated emojis. Once a mood is selected, the interface dynamically updates with a motivational message and emoji to reflect the user’s emotional state. The app focuses on simplicity, positivity, and user engagement through smooth interactions and a calming design.
            </p>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <strong>Technologies Used:</strong>
            </p>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <li><strong>HTML5: </strong>Structured the layout and content of the mood tracker.</li>
              <li><strong>CSS3: </strong>Designed a clean, pastel-themed interface with responsive layout and hover animations.</li>
              <li><strong>JavaScript (ES6): </strong>Handled emoji selection, dynamic updates, and mood-based message display.</li>
              <li><strong>Font Awesome: </strong>Provided expressive, high-quality emoji icons for each mood option.</li>
            </ul>
            <ul className="mt-2 list-disc list-inside text-sm md:text-base lg:text-lg">
              <strong>Features:</strong>
              <li>Interactive emoji-based mood selection</li>
              <li>Dynamic motivational message display based on user mood</li>
              <li>Smooth hover animations for enhanced user engagement</li>
              <li>Fully responsive design that adapts to mobile and desktop screens</li>
              <li>Minimal, modern interface promoting a positive user experience</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={moodMate}
              alt="Interactive Mood Tracker – 'MoodMate'"
              className="rounded-lg shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;