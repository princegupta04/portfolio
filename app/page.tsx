import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-700 mb-6">
          Explore my projects, skills, and professional journey. Click below to get started!
        </p>
        <Link href="/Portfolio">
          Go to Portfolio
        </Link>
      </div>
    </div>
    </>
  );
}
