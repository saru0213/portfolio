// Components/Loader.js
"use client";
import { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Skills & Experience...",
    "Preparing Projects...",
    "Setting up Certifications...",
    "Finalizing Journey...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo/Brand Animation */}
        <div className="relative">
          <div className="w-24 h-24 relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
            </div>
          </div>
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-3 h-3 bg-pink-400 rounded-full -bottom-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-3 h-3 bg-violet-400 rounded-full -left-1 top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -right-1 top-1/2 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Saraswati Adkine
          </h2>
          <p className="text-purple-300 text-lg font-medium">
            Full Stack Developer
          </p>
          
          {/* Dynamic Loading Text */}
          <div className="h-6 flex items-center justify-center">
            <p className="text-gray-300 text-sm animate-pulse">
              {loadingTexts[currentText]}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-md">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skills Preview Icons */}
        <div className="flex space-x-4 mt-8">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'JavaScript', icon: '🟨' },
            { name: 'Python', icon: '🐍' },
            { name: 'Database', icon: '🗄️' },
            { name: 'Cloud', icon: '☁️' }
          ].map((skill, index) => (
            <div
              key={skill.name}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xl animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '2s'
              }}
            >
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Completion Animation */}
        {isComplete && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-ping">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75"></div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;