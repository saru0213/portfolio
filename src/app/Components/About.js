// app/components/About.js
"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      desc: "Modern UI/UX with React ecosystem",
      color: "from-blue-500 to-cyan-500",
      percentage: 95,
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
      desc: "Scalable server-side solutions",
      color: "from-green-500 to-emerald-500",
      percentage: 90,
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
      desc: "Data management and optimization",
      color: "from-purple-500 to-pink-500",
      percentage: 85,
      techStack: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      desc: "Deployment and infrastructure",
      color: "from-orange-500 to-red-500",
      percentage: 88,
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
      status: "Current",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science Stream",
      institution: "Janata Junior College, Naigaon",
      year: "2021",
      icon: "📚",
      status: "Completed",
    },
    {
      degree: "Secondary (10th)",
      field: "State Board",
      institution: "Y.B.P High School",
      year: "2019",
      icon: "🏫",
      status: "Completed",
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
      {/* Enhanced Animated Background - Responsive */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-44 sm:w-72 md:w-88 h-44 sm:h-72 md:h-88 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-10 sm:left-20 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header Section - Enhanced Mobile */}
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
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
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

        {/* Enhanced Stats Section - Better Mobile Grid */}
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

        {/* Main Content Grid - Better Mobile Stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
          {/* Enhanced Journey Card - Mobile First */}
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
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4">
                    🚀
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    My Journey
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  As a passionate Full Stack Developer specializing in modern
                  web technologies, I&apos;ve dedicated myself to mastering the art
                  of creating seamless digital experiences. My journey spans
                  from frontend frameworks like React and Next.js to backend
                  systems and AI integrations.
                </p>

                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Through countless hours of coding, participating in
                  hackathons, and building real-world applications, I&apos;ve
                  developed a deep understanding of both technical excellence
                  and user-centered design principles.
                </p>

                {/* Enhanced Core Values - Mobile Grid */}
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

                {/* Enhanced Achievements - Mobile Grid */}
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

                {/* Enhanced Progress bars - Mobile Friendly */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Problem Solving
                    </span>
                    <span className="text-xs sm:text-sm text-purple-400">
                      95%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full w-[95%] animate-pulse"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Technical Leadership
                    </span>
                    <span className="text-xs sm:text-sm text-purple-400">
                      90%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full w-[90%] animate-pulse"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Innovation Mindset
                    </span>
                    <span className="text-xs sm:text-sm text-purple-400">
                      98%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full w-[98%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Card - Mobile Optimized */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4">
                    💻
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    What I Do
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  I specialize in building modern, scalable applications using
                  cutting-edge technologies. From AI-powered solutions to
                  responsive web applications, I create digital experiences that
                  are both powerful and user-friendly.
                </p>

                {/* Enhanced Tech Stack Skills Grid - Mobile First */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    My Tech Arsenal
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2 sm:space-y-3">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl mb-1 sm:mb-2 hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div className="text-white font-medium text-sm sm:text-base mb-1">
                            {skill.title}
                          </div>
                          <div className="text-gray-400 text-xs sm:text-sm mb-2">
                            {skill.desc}
                          </div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          {skill.techStack.map((tech, techIndex) => (
                            <button
                              key={techIndex}
                              onClick={() =>
                                setSelectedSkill(
                                  selectedSkill === `${index}-${techIndex}`
                                    ? null
                                    : `${index}-${techIndex}`
                                )
                              }
                              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border transition-all duration-300 hover:scale-105 ${
                                selectedSkill === `${index}-${techIndex}`
                                  ? `bg-gradient-to-r ${skill.color} text-white border-transparent shadow-lg`
                                  : "bg-gray-800/50 text-gray-300 border-gray-700 hover:border-purple-500/50 hover:bg-gray-700/50"
                              }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Proficiency Display - Mobile Responsive */}
                  {selectedSkill && (
                    <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 animate-fadeIn">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h5 className="text-white font-semibold text-base sm:text-lg">
                          {(() => {
                            const [skillIndex, techIndex] = selectedSkill
                              .split("-")
                              .map(Number);
                            return skills[skillIndex].techStack[techIndex];
                          })()}
                        </h5>
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-400 font-bold text-sm sm:text-lg">
                            {(() => {
                              const [skillIndex] = selectedSkill
                                .split("-")
                                .map(Number);
                              return `${skills[skillIndex].percentage}%`;
                            })()}
                          </span>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4 mb-2 sm:mb-3">
                        <div
                          className={`bg-gradient-to-r ${(() => {
                            const [skillIndex] = selectedSkill
                              .split("-")
                              .map(Number);
                            return skills[skillIndex].color;
                          })()} h-3 sm:h-4 rounded-full transition-all duration-1000 ease-out animate-[width_1s_ease-out] shadow-lg`}
                          style={{
                            width: `${(() => {
                              const [skillIndex] = selectedSkill
                                .split("-")
                                .map(Number);
                              return skills[skillIndex].percentage;
                            })()}%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-400">
                          {(() => {
                            const [skillIndex] = selectedSkill
                              .split("-")
                              .map(Number);
                            return skills[skillIndex].title;
                          })()}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-purple-400">
                          {(() => {
                            const [skillIndex] = selectedSkill
                              .split("-")
                              .map(Number);
                            const percentage = skills[skillIndex].percentage;
                            if (percentage >= 90) return "Expert Level";
                            if (percentage >= 80) return "Advanced";
                            if (percentage >= 70) return "Intermediate";
                            return "Learning";
                          })()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Call to action - Mobile Friendly */}
                <div className="mt-6 sm:mt-8 text-center">
                  <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium text-xs sm:text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group">
                    <span>Let&apos;s Create Something Extraordinary</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Education Section - Mobile Optimized */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4">
                  📚
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="group/edu relative">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 h-full">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="text-2xl sm:text-3xl md:text-4xl group-hover/edu:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div
                          className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                            edu.status === "Current"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {edu.status}
                        </div>
                      </div>
                      <h4 className="font-bold text-white mb-2 text-base sm:text-lg leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium mb-2 text-sm leading-tight">
                        {edu.field}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1 leading-tight">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-xs">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Motivational Quote - Mobile Responsive */}
              <div className="mt-6 sm:mt-8 text-center">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20">
                  <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                   &quot;The foundation of knowledge is just the beginning - every
                    day brings new opportunities to learn, grow, and push the
                    boundaries of what&apos;s possible in technology.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
