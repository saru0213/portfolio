import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
      <p className="mb-6">Join us to explore more features.</p>
      <Link
        href="/signupform"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </Link>
    </div>
  );
}
