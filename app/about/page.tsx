// Mark the file as a client component
"use client";

import { useState } from 'react';

export default function About() {
  // State for toggle effect on button click
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <section id="about" className="my-8 p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center transition-all hover:text-blue-800">
        About Me
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Dedicated developer and programmer with hands-on experience, eager to learn and contribute to new projects. 
        Skilled in programming languages such as C++, Java, PHP, JavaScript, React.js, and Node.js.
      </p>
      
      {/* Interactive button to toggle extra details */}
      <button 
        onClick={toggleDetails} 
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        {showDetails ? 'Show Less' : 'Show More'}
      </button>

      {/* Conditionally rendered content for dynamic interaction */}
      {showDetails && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Skills & Expertise</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              <span>C++, Java, PHP</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              <span>JavaScript, React.js, Node.js</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              <span>Database Management (SQL, MongoDB)</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              <span>Version Control with Git</span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
