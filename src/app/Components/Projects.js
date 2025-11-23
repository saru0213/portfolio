// import { useState, useEffect } from "react";
// import { ExternalLink, Github, Sparkles } from "lucide-react";

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleRedirect = () => {
//     window.open("https://github.com/saru0213", "_blank");
//   };

//   const projects = [
//      {
//       id: 1,
//       title: "PeriodCare – AI-Powered Menstrual Health Companion",
//       description:
//         "An AI-driven menstrual health platform offering multi-language education, symptom guidance, personalized recommendations, myth-busting, partner mode support, and more to improve menstrual awareness and comfort.",
//       tech: [
//         "Next.js",
//         "React.js",
//         "Tailwind CSS",
//         "Gemini AI API",
//         "Ollama (Local LLM)",
//         "FastAPI",
//       ],
//       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
//       gradient: "from-pink-500 to-rose-600",
//     },
//     {
//       id: 2,
//       title: "Avsarmarg – Your Journey from Campus to Company Starts Here",
//       description:
//         "An AI-powered career platform that provides personalized career paths, skills development, interview preparation, and job opportunities tailored for students. I worked on the course module and authentication using Google sign-in, implemented simple JWT token handling, and managed backend functionality.",
//       tech: [
//         "React.js",
//         "Next.js",
//         "Firebase",
//         "Gemini AI API",
//         "Tailwind CSS",
//         "GitHub",
//         "Vercel (CI/CD)",
//         "Monaco Editor",
//         "Judge0 API",
//         "Cheerio",
//         "Job Listing Fetch API",
//       ],
//       live: "https://avsarmarg.vercel.app/",
//       image: "photos/avsarmarg.jpeg",
//       gradient: "from-blue-500 to-purple-600",
//     },
//     {
//       id: 3,
//       title: "SecureAuth Web Application",
//       description:
//         "SecureAuth is a full-stack authentication platform built with Next.js and React, featuring Google OAuth, bcrypt password hashing, OTP verification, JWT-protected routes, and Firebase Firestore integration for secure user management.",
//       tech: [
//         "Next.js",
//         "React",
//         "Tailwind CSS",
//         "NextAuth",
//         "Google OAuth",
//         "JWT",
//         "bcrypt",
//         "Firebase Firestore",
//         "Lucide React",
//       ],
//       github: "https://github.com/saru0213/SecureAuth",
//       live: "https://secure-authpass.vercel.app/",
//       image: "photos/secureauth.jpeg",
//       gradient: "from-green-500 to-teal-600",
//     },
//     {
//       id: 4,
//       title: "File Xerox – Upload → Print → Pickup",
//       description:
//         "A revolutionary cloud printing platform that connects users to nearby Xerox centers. Upload your files, print securely, and pick them up—no USB drives or waiting required. Built with modern web tech and cloud integration for seamless performance.",
//       tech: ["React.js", "Next.js", "Tailwind CSS", "Vercel (CI/CD)", "Cloudinary"],
//       github: "https://github.com/saru0213/FileXerox",
//       image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
//       gradient: "from-orange-500 to-red-600",
//     },
//     {
//       id: 5,
//       title: "cityInsights – City Information Finder",
//       description:
//         "An AI-powered platform that helps users find detailed information about cities across different states and countries. Built with Gemini AI API for intelligent responses and a responsive UI for a seamless search experience.",
//       tech: ["React", "Next.js", "Gemini AI API", "Tailwind CSS"],
//       github: "https://github.com/saru0213/CityInsights",
//       live: "https://cityinsights.vercel.app/",
//       image: "photos/cityinsight.jpeg",
//       gradient: "from-indigo-500 to-blue-600",
//     },
//     {
//       id: 6,
//       title: "Modern College Website Using AI",
//       description:
//         "An interactive, responsive college website built with Next.js and Tailwind CSS, featuring AI-powered chatbots for guidance, AI-generated content, and seamless navigation for an enhanced student experience.",
//       tech: ["Next.js", "Tailwind CSS", "Gemini API"],
//       image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
//       gradient: "from-pink-500 to-rose-600",
//     },
//     {
//       id: 7,
//       title: "C-Rush 3.0 – Hackathon Event Website",
//       description:
//         "An event website for the Ultimate Programming Challenge organized by the GCOEY Team. Built to manage event details, registration, and announcements, featuring AI-powered elements and responsive UI for an engaging hackathon experience.",
//       tech: ["React.js", "Next.js", "Gemini AI API", "Tailwind CSS", "Vercel (CI/CD)"],
//       github: "https://github.com/saru0213/c-rush",
//       live: "https://c-rush.vercel.app/",
//       image: "photos/c-rush.jpeg",
//       gradient: "from-yellow-500 to-orange-600",
//     },
   
//     {
//       id: 8,
//       title: "Doctor-Patient Appointment System",
//       description:
//         "Online appointment booking platform built with PHP and MySQL, enabling patient registration, doctor availability management, and automated notifications.",
//       tech: ["PHP", "MySQL", "HTML", "CSS"],
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
//       gradient: "from-emerald-500 to-green-600",
//     },
//     {
//       id: 9,
//       title: "PDF to Excel Converter",
//       description:
//         "A simple Streamlit app to extract structured text from PDF files and convert it into an Excel (.xlsx) format. Built using Python, pdfplumber, pandas, and Streamlit for seamless file handling and user interaction.",
//       tech: ["Python", "Streamlit", "pdfplumber", "pandas"],
//       github: "https://github.com/saru0213/pdf_to_excel_converter",
//       image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
//       gradient: "from-violet-500 to-purple-600",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
//           }`}
//         >
         
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
//             My <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Projects</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Here are some of the projects I've worked on, showcasing my skills across different technologies
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Project Image with Gradient Overlay */}
//               <div className="relative h-56 overflow-hidden">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-3 border border-slate-700/50">
//                   <span className="text-2xl">💻</span>
//                 </div>
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

//                 {/* Tech Stack */}
//                 <div className="mb-4">
//                   <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.slice(0, 4).map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-gray-300 hover:bg-slate-700/50 transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.tech.length > 4 && (
//                       <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-gray-400">
//                         +{project.tech.length - 4} more
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Project Links */}
//                 <div className="flex gap-3 pt-4 border-t border-slate-800/50">
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg transition-all hover:scale-105 border border-slate-700/50"
//                     >
//                       <Github className="w-4 h-4" />
//                       <span className="text-sm font-medium">Code</span>
//                     </a>
//                   )}
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span className="text-sm font-medium">Live Demo</span>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div
//           className={`text-center transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <button
//             onClick={handleRedirect}
//             className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-2xl shadow-purple-500/25"
//           >
//             <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//             View More Projects
//             <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState, useEffect } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const handleRedirect = () => {
    window.open("https://github.com/saru0213", "_blank");
  };

  const projects = [
     {
      id: 1,
      title: "PeriodCare – AI-Powered Menstrual Health Companion",
      description:
        "An AI-driven menstrual health platform offering multi-language education, symptom guidance, personalized recommendations, myth-busting, partner mode support, and more to improve menstrual awareness and comfort.",
      tech: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Gemini AI API",
        "Ollama (Local LLM)",
        "FastAPI",
      ],
      live:"https://periodcareforyou.vercel.app/",
      image:"photos/periodCare.jpeg",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 2,
      title: "Avsarmarg – Your Journey from Campus to Company Starts Here",
      description:
        "An AI-powered career platform that provides personalized career paths, skills development, interview preparation, and job opportunities tailored for students. I worked on the course module and authentication using Google sign-in, implemented simple JWT token handling, and managed backend functionality.",
      tech: [
        "React.js",
        "Next.js",
        "Firebase",
        "Gemini AI API",
        "Tailwind CSS",
        "GitHub",
        "Vercel (CI/CD)",
        "Monaco Editor",
        "Judge0 API",
        "Cheerio",
        "Job Listing Fetch API",
      ],
      live: "https://avsarmarg.vercel.app/",
      image: "photos/avsarmarg.jpeg",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      title: "SecureAuth Web Application",
      description:
        "SecureAuth is a full-stack authentication platform built with Next.js and React, featuring Google OAuth, bcrypt password hashing, OTP verification, JWT-protected routes, and Firebase Firestore integration for secure user management.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "NextAuth",
        "Google OAuth",
        "JWT",
        "bcrypt",
        "Firebase Firestore",
        "Lucide React",
      ],
      github: "https://github.com/saru0213/SecureAuth",
      live: "https://secure-authpass.vercel.app/",
      image: "photos/secureauth.jpeg",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 4,
      title: "File Xerox – Upload → Print → Pickup",
      description:
        "A revolutionary cloud printing platform that connects users to nearby Xerox centers. Upload your files, print securely, and pick them up—no USB drives or waiting required. Built with modern web tech and cloud integration for seamless performance.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Vercel (CI/CD)", "Cloudinary"],
      github: "https://github.com/saru0213/FileXerox",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "cityInsights – City Information Finder",
      description:
        "An AI-powered platform that helps users find detailed information about cities across different states and countries. Built with Gemini AI API for intelligent responses and a responsive UI for a seamless search experience.",
      tech: ["React", "Next.js", "Gemini AI API", "Tailwind CSS"],
      github: "https://github.com/saru0213/CityInsights",
      live: "https://cityinsights.vercel.app/",
      image: "photos/cityinsight.jpeg",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: 6,
      title: "Modern College Website Using AI",
      description:
        "An interactive, responsive college website built with Next.js and Tailwind CSS, featuring AI-powered chatbots for guidance, AI-generated content, and seamless navigation for an enhanced student experience.",
      tech: ["Next.js", "Tailwind CSS", "Gemini API"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      title: "C-Rush 3.0 – Hackathon Event Website",
      description:
        "An event website for the Ultimate Programming Challenge organized by the GCOEY Team. Built to manage event details, registration, and announcements, featuring AI-powered elements and responsive UI for an engaging hackathon experience.",
      tech: ["React.js", "Next.js", "Gemini AI API", "Tailwind CSS", "Vercel (CI/CD)"],
      github: "https://github.com/saru0213/c-rush",
      live: "https://c-rush.vercel.app/",
      image: "photos/c-rush.jpeg",
      gradient: "from-yellow-500 to-orange-600",
    },
   
    {
      id: 8,
      title: "Doctor-Patient Appointment System",
      description:
        "Online appointment booking platform built with PHP and MySQL, enabling patient registration, doctor availability management, and automated notifications.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: 9,
      title: "PDF to Excel Converter",
      description:
        "A simple Streamlit app to extract structured text from PDF files and convert it into an Excel (.xlsx) format. Built using Python, pdfplumber, pandas, and Streamlit for seamless file handling and user interaction.",
      tech: ["Python", "Streamlit", "pdfplumber", "pandas"],
      github: "https://github.com/saru0213/pdf_to_excel_converter",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
         
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            My <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills across different technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-3 border border-slate-700/50">
                  <span className="text-2xl">💻</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-gray-400 text-sm mb-2 ${expandedProjects[project.id] ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>
                <button
                  onClick={() => toggleProject(project.id)}
                  className="text-purple-400 hover:text-purple-300 text-xs font-medium mb-4 transition-colors"
                >
                  {expandedProjects[project.id] ? 'Read Less' : 'Read More'}
                </button>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Tech Stack:</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {project.tech.join(" • ")}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-800/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg transition-all hover:scale-105 border border-slate-700/50"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={handleRedirect}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-2xl shadow-purple-500/25"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View More Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;