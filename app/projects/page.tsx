"use client"; // Ensure this is marked as a client-side component

export default function Projects() {
  return (
    <section id="projects" className="my-8 p-6 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center hover:text-teal-800 transition-all">
        Projects
      </h2>
      
      <div className="space-y-6">
        {/* Project 1 - MernEstate */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-600 mb-3">MernEstate</h3>
          <p className="text-gray-700 mb-4">
            An online platform for buying, selling, and renting houses. Integrated user authentication and advanced search functionalities.
          </p>
          <p className="text-gray-500">Tech-stack: React.js, Tailwind, Express.js, MongoDB</p>
        </div>

        {/* Project 2 - DivineCuts */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-600 mb-3">DivineCuts</h3>
          <p className="text-gray-700 mb-4">
            A dynamic salon website with an intuitive appointment booking system and personalized user profiles.
          </p>
          <p className="text-gray-500">Tech-stack: HTML, CSS, JavaScript, Express.js, MongoDB</p>
        </div>
      </div>
    </section>
  );
}
