// app/components/Skills.js
"use client";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", icon: "<>" },
        { name: "Next.js", icon: "{ }" },
        { name: "TypeScript", icon: "TS" },
        { name: "Tailwind CSS", icon: "CSS" },
        { name: "JavaScript", icon: "JS" },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "N" },
        { name: "Python", icon: "PY" },
        { name: "Firebase", icon: "F" },
        { name: "Express.js", icon: "EX" },
        { name: "MongoDB", icon: "DB" },
        { name: "MySQL", icon: "SQL" },
      ],
    },
    programming: {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "C" },
        { name: "Python", icon: "PY" },
        { name: "Java", icon: "J" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "GIT" },
        { name: "Google Colab", icon: "GC" },
        { name: "AWS", icon: "AWS" },
        { name: "Figma", icon: "FIG" },
        { name: "VS Code", icon: "VS" },
        { name: "Postman", icon: "API" },
        { name: "PyCharm", icon: "PC" },
      ],
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "PS" },
        { name: "Team Collaboration", icon: "TC" },
        { name: "Communication", icon: "COM" },
        { name: "Leadership", icon: "LED" },
        { name: "Time Management", icon: "TM" },
        { name: "Critical Thinking", icon: "CT" },
      ],
    },
  };

  return (
    <section
      id="skills"
      
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === key
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center flex-col text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 text-white font-bold text-xs sm:text-base">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-base">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
