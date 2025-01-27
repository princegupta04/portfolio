"use client"; // Mark as a client component if you're using client-side functionality

export default function Skills() {
  return (
    <section id="skills" className="my-8 p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center hover:text-blue-800 transition-all">
        Skills
      </h2>
      
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Individual skill items */}
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">Java, C, C++</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">Python</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">React.js, Node.js</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">MongoDB, SQL</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">PHP, Laravel</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
          <span className="font-semibold">Git, Postman</span>
        </li>
      </ul>
    </section>
  );
}
