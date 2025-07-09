// app/components/Projects.js
"use client";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
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
      // features: [
      //   'Username/Email + Password Login with bcrypt hashing',
      //   'Google OAuth Sign-In via NextAuth.js',
      //   'JWT Tokens for protected routes',
      //   'OTP Verification during signup and password reset',
      //   'Responsive UI with Tailwind CSS and dark mode support',
      //   'Firebase Firestore as backend database',
      //   'Protected routes with middleware authentication',
      //   'NextAuth.js for session and token management'
      // ],
      github: "https://github.com/saru0213/SecureAuth", // replace with your repo link
      live: "https://secure-authpass.vercel.app",
    },

    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather tracking with interactive charts and location-based forecasts',
    //   tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Sass'],
    //   github: '#',
    //   live: '#'
    // },

    {
      id: 2,
      title: "Modern College Website Using AI",
      description:
        "An interactive, responsive college website built with Next.js and Tailwind CSS, featuring AI-powered chatbots for guidance, AI-generated content, and seamless navigation for an enhanced student experience.",
      tech: ["Next.js", "Tailwind CSS", "Gemini API"],
      // github: "https://github.com/yourusername/modern-college-ai", // replace with your repo link
      // live: "#", // add live link if deployed
    },
    {
      id: 3,
      title: "Taskly",
      description:
        "Taskly is a task management web app built with React.js and Tailwind CSS, allowing users to add, edit, delete, and track tasks with secure authentication and a responsive UI.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Yup",
        "Formik",
        "LocalStorage",
        "bcryptjs",
        "Weather API",
      ],
      // features: [
      //   "Add, edit, and delete tasks",
      //   "User authentication with bcryptjs password hashing",
      //   "Personalized task access after login",
      //   "Responsive design for all devices",
      //   "Form validation with Yup and Formik",
      //   "Weather updates integration (if applicable)",
      // ],
      github: "https://github.com/yourusername/taskly", // replace with your actual repo link
      // live: "#", // add live link if deployed
    },

    {
      id: 4,
      title: "Mock Interview Website with AI",
      description:
        "A web application that simulates technical interviews using AI, providing instant feedback and highlighting strengths and areas of improvement.",
      tech: ["Next.js", "Firebase", "Gemini", "Tailwind CSS"],
      // github: "https://github.com/yourusername/mock-interview-ai", // replace with your repo link
      // live: "#", // add live link if deployed
    },
    {
      id: 5,
      title: "Doctor-Patient Appointment System",
      description:
        "Online appointment booking platform built with PHP and MySQL, enabling patient registration, doctor availability management, and automated notifications.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      // github: "https://github.com/yourusername/doctor-appointment-system", // replace with your repo link
      // live: "#", // add live link if deployed
    },
    {
      id: 6,
      title: "PDF to Excel Converter",
      description:
        "A simple Streamlit app to extract structured text from PDF files and convert it into an Excel (.xlsx) format. Built using Python, pdfplumber, pandas, and Streamlit for seamless file handling and user interaction.",
      tech: ["Python", "Streamlit", "pdfplumber", "pandas"],
      github: "https://github.com/saru0213/pdf_to_excel_converter",
      // live: "#", // add live Streamlit Cloud link if deployed
    },
  ];

  return (
    <section id="projects"
    
     className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills across different technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform  delay-${
                (index + 1) * 100
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl text-white mb-2">💻</div>
                  <span className="text-white text-sm font-medium">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
