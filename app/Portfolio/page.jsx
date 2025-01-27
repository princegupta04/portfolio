import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen">
      

      <main className="container mx-auto p-4">
        {/* About Section */}
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Dedicated developer and programmer with hands-on experience, eager to learn and contribute to new projects.
            Skilled in programming languages such as C++, Java, PHP, JavaScript, React.js, and Node.js.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-white p-4 shadow-md rounded">Java, C, C++</li>
            <li className="bg-white p-4 shadow-md rounded">Python</li>
            <li className="bg-white p-4 shadow-md rounded">React.js, Node.js</li>
            <li className="bg-white p-4 shadow-md rounded">MongoDB, SQL</li>
            <li className="bg-white p-4 shadow-md rounded">PHP, Laravel</li>
            <li className="bg-white p-4 shadow-md rounded">Git, Postman</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-xl font-bold">MernEstate</h3>
              <p className="text-gray-700">
                An online platform for buying, selling, and renting houses. Integrated user authentication and advanced search functionalities.
              </p>
              <p className="text-gray-500">Tech-stack: React.js, Tailwind, Express.js, MongoDB</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-xl font-bold">DivineCuts</h3>
              <p className="text-gray-700">
                A dynamic salon website with an intuitive appointment booking system and personalized user profiles.
              </p>
              <p className="text-gray-500">Tech-stack: HTML, CSS, JavaScript, Express.js, MongoDB</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-xl font-bold">Software Engineer Intern</h3>
            <p className="text-gray-700">Droom, Gurgaon, India</p>
            <p className="text-gray-500">September 2024 - Present</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Developed a PHP-Laravel website with CSV upload functionality processed via APIs.</li>
              <li>Automated email communication features to enhance system performance.</li>
              <li>Utilized Git, SQL, Postman, and API integration extensively.</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">Feel free to reach out to me!</p>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:princegupta9041@gmail.com" className="text-blue-600">princegupta9041@gmail.com</a></li>
            <li>Phone: +91 9877996134</li>
            <li>LinkedIn: <a href="https://linkedin.com/in/prince-gupta04" target="_blank" className="text-blue-600">linkedin.com/in/prince-gupta04</a></li>
            <li>GitHub: <a href="https://github.com/princegupta04" target="_blank" className="text-blue-600">github.com/princegupta04</a></li>
          </ul>
        </section>
      </main>


    </div>
  );
}
