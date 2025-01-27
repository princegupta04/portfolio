import Link from "next/link";
function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Prince Gupta</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  