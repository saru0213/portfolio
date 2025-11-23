"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
      ],
    },
    {
      icon: "🔧",
      title: "Backend Development",
      techStack: [
        "Node.js",
        "Express.js",
        "Next.js API Routes",
        "Python",
        "RESTful APIs",
        "Gemini AI",
        "YouTube API",
      ],
    },
    {
      icon: "🗄️",
      title: "Database & Storage",
      techStack: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      techStack: ["Google Cloud Platform", "Vercel", "CI/CD", "Git&Github"],
    },
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "25+", label: "Technologies Mastered" },
    { number: "24/7", label: "Innovation Mindset" },
    { number: "AI", label: "Powered Solutions" },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      institution: "Government College Of Engineering, Yavatmal",
      year: "2021-2025",
      icon: "🎓",
      status: "Completed",
      percentage: "8.91 CGPA",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science Stream",
      institution: "Janata Junior College, Naigaon",
      year: "2020-2021",
      icon: "📚",
      status: "Completed",
      percentage: "91.50%",
    },
    {
      degree: "Secondary (10th)",
      field: "State Board",
      institution: "Y.B.P High School",
      year: "2018-2019",
      icon: "🏫",
      status: "Completed",
      percentage: "92.80%",
    },
  ];

  const coreValues = [
    { icon: "🚀", title: "Innovation", desc: "Pushing tech boundaries" },
    { icon: "🎯", title: "Quality", desc: "Excellence in every line" },
    { icon: "🤝", title: "Collaboration", desc: "Building together" },
    { icon: "📈", title: "Growth", desc: "Continuous improvement" },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Hackathon Winner",
      desc: "Multiple hackathon victories",
    },
    { icon: "💡", title: "Problem Solver", desc: "Complex solution architect" },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-44 sm:w-72 md:w-88 h-44 sm:h-72 md:h-88 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 sm:left-20 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 relative px-2">
            About{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                Me
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2">
            Passionate about crafting digital experiences that make a difference
          </p>
          <p className="text-purple-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium px-2">
            Every line of code is a step forward, every project a new milestone the journey of continuous learning and innovation never stops, and
            neither do I
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
          {/* Journey Card */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4">
                    🚀
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    My Journey
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
  I&apos;m a passionate Full Stack Developer skilled in modern web technologies, working across React, Next.js, backend systems, and AI integrations. Through hands-on projects and hackathons, I&apos;ve built strong technical expertise and a user-focused approach to creating seamless digital experiences.
                </p>

                {/* Core Values */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Core Values
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {coreValues.map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg sm:rounded-xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group/value"
                      >
                        <div className="text-lg sm:text-xl group-hover/value:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm sm:text-base">
                            {value.title}
                          </div>
                          <div className="text-gray-400 text-xs sm:text-sm truncate">
                            {value.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg sm:rounded-xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group/achievement"
                      >
                        <div className="text-lg sm:text-xl group-hover/achievement:scale-110 transition-transform duration-300">
                          {achievement.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm sm:text-base">
                            {achievement.title}
                          </div>
                          <div className="text-gray-400 text-xs sm:text-sm truncate">
                            {achievement.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-5 sm:p-7 border border-gray-800/50 transition-all duration-500">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl mr-3">
                    💻
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                </div>

                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  I build modern, scalable applications using the latest web and AI technologies. My focus is to create fast, reliable, and user-friendly digital experiences.
                </p>

                {/* Skills */}
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <h4 className="text-white font-semibold text-base mb-2 flex items-center">
                        <span className="mr-2 text-lg">{skill.icon}</span> {skill.title}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {skill.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs sm:text-sm bg-gray-800/70 text-gray-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section - No Hover Effects */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-25 transition duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-800/50 transition-all duration-500">
              
              {/* Heading */}
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mr-3">
                  🎓
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Education 
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative border-l-2 border-purple-500/40 ml-6 sm:ml-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative mb-10">
                    {/* Dot */}
                    <div className="absolute -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs sm:text-lg text-white shadow-lg shadow-purple-500/30">
                      {edu.icon}
                    </div>

                    {/* Card - No Hover Effects */}
                    <div className="ml-6 sm:ml-10 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-4 sm:p-6 border border-gray-800/50">
                      
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-bold text-base sm:text-lg md:text-xl">
                          {edu.degree}
                        </h4>

                        <span
                          className={`px-3 py-1 text-xs rounded-full font-medium ${
                            edu.status === "Current"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <p className="text-purple-300 font-medium text-sm sm:text-base mb-1">
                        {edu.field}
                      </p>

                      <p className="text-gray-400 text-xs sm:text-sm mb-1">
                        {edu.institution}
                      </p>

                      <p className="text-gray-500 text-xs sm:text-sm font-medium">
                        {edu.year}
                      </p>

                      {edu.percentage && (
                        <p className="mt-3 text-sm text-gray-300 font-medium">
                          📌 Percentage: <span className="text-purple-400">{edu.percentage}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;