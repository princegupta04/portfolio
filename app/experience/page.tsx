"use client"; // Ensure this is treated as a client component if you're using React hooks or other client-side features

export default function Experience() {
  return (
    <section id="experience" className="my-8 p-6 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-indigo-600 mb-6 text-center transition-all hover:text-indigo-800">
        Experience
      </h2>
      
      {/* Experience Card */}
      <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Software Engineer Intern</h3>
        <p className="text-gray-700 text-lg mb-2">Droom, Gurgaon, India</p>
        <p className="text-gray-500 text-sm mb-4">September 2024 - Present</p>

        {/* Experience Details */}
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li className="hover:text-indigo-600 transition-all">Developed a PHP-Laravel website with CSV upload functionality processed via APIs.</li>
          <li className="hover:text-indigo-600 transition-all">Automated email communication features to enhance system performance.</li>
          <li className="hover:text-indigo-600 transition-all">Utilized Git, SQL, Postman, and API integration extensively.</li>
        </ul>
      </div>
    </section>
  );
}
