import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
