export default function projects(){
    return (
        <>
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
        </>
    );
}