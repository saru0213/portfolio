// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
//       <p className="mb-6">Join us to explore more features.</p>
//       <Link
//         href="/signupform"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Sign Up
//       </Link>
//     </div>
//   );
// }


// app/page.js
"use client";
import { useState, useEffect } from 'react';
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certifications from './Components/Certifications'
import Contact from './Components/Contact'
import Journey from './Components/Journey'
import TeamLeadership from './Components/TeamLeadership'
import Loader from './Components/Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Optional: Add a minimum loading time for better UX
  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      // This ensures loader shows for at least 2 seconds
    }, 2000);

    return () => clearTimeout(minLoadingTime);
  }, []);

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey/>
        <TeamLeadership/>
        <Contact />
      </main>
    </div>
  )
}