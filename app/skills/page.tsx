

export default function skills(){
    return (
        <>
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
        </>
    );
}