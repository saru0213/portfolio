"use client";
import { useState } from "react";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("victories");
  const [imageErrors, setImageErrors] = useState({});
  const [videoErrors, setVideoErrors] = useState({});

  const hackathons = [
    {
      id: 1,
      title: "Tech-Carvaan 2025",
      date: "24 March 2025",
      achievement: "Winner - National Level Technical Fest",
      description: "Winners of the 24-hour hackathon at Tech-Carvaan 2025, held in Jalgaon.",
      image: "/photos/winnerja.jpg",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Hacksphere 2.0",
      date: "22 March 2025",
      achievement: "Winner - 8 Hour Hackathon",
      description: "Winners of Hacksphere 2.0, an 8-hour hackathon held at Ramdeobaba University, Nagpur.",
      image: "/photos/winnerH.jpg",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Ennovate25",
      date: "29 March 2025",
      achievement: "2nd Rank - National Level Project Competition",
      description: "Secured 2nd rank in Ennovate25 national level project competition at Ramdeobaba University, Nagpur.",
      image: "/photos/img12.jpg",
      icon: "🥈",
    },
    {
      id: 4,
      title: "Technovation Project Expo",
      date: "2025",
      achievement: "Winner - Project Expo",
      description: "Winners of Technovation Project Expo organized by IEEE SB SSGMCE, Shegaon.",
      image: "/photos/winnerS.jpg",
      icon: "🏆",
    },
    {
      id: 5,
      title: "Tech Axion 2025 Ideathon",
      date: "5 April 2025",
      achievement: "2nd Rank - Idea-thon",
      description: "Secured 2nd rank in Idea-thon at Tech Axion 2025, a national level technical fest at TGPCET, Nagpur.",
      image: "/photos/winnerN.jpg",
      icon: "🥈",
    },
    {
      id: 6,
      title: "Brahmax 1.0",
      date: "16-17 May 2025",
      achievement: "2nd Rank - BGIEM Jabalpur",
      description: "Secured 2nd rank in the 24-hour hackathon at BGIEM, Jabalpur, Madhya Pradesh.",
      image: "/photos/winnerJ.jpg",
      icon: "🥈",
    },
  ];

  const journeyVideos = [
    {
      id: 1,
      title: "Our Hackathon Journey 2025",
      description: "Building projects and winning hackathons as a GCOEY team.",
      video: "/photos/video.mp4",
      duration: "10:30",
      icon: "🏆",
      tags: ["Hackathon", "Teamwork", "Projects"],
    },
    {
      id: 2,
      title: "Hackathon Leadership 2024",
      description: "Leading our team and explaining projects during hackathons.",
      video: "/photos/video1.mp4",
      duration: "8:45",
      icon: "👥",
      tags: ["Leadership", "Hackathons", "Teamwork"],
    },
  ];

  const handleImageError = (id, type) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${type}_${id}`]: true,
    }));
  };

  const handleVideoError = (id) => {
    setVideoErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const ImagePlaceholder = ({ item, type }) => {
    const key = `${type}_${item.id}`;
    const hasError = imageErrors[key];

    return (
      <div className="relative overflow-hidden">
        {!hasError && item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            onError={() => handleImageError(item.id, type)}
          />
        )}
        {(hasError || !item.image) && (
          <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
              <span className="text-white text-xs sm:text-sm">
                {type === "victory" ? "Victory" : "Video"}
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {type === "victory" ? item.date : item.duration}
        </div>
      </div>
    );
  };

  const VideoPlaceholder = ({ video }) => {
    const hasError = videoErrors[video.id];

    return (
      <div className="relative overflow-hidden">
        {!hasError && video.video && (
          <video
            className="w-full h-48 sm:h-56 lg:h-64 object-contain bg-gray-800"
            controls
            preload="metadata"
            onError={() => handleVideoError(video.id)}
          >
            <source src={video.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {(hasError || !video.video) && (
          <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">{video.icon}</div>
              <span className="text-white text-xs sm:text-sm">Video</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const tabs = [
    { key: "victories", label: "Victories", fullLabel: "Victories & Achievements", icon: "🏆" },
    { key: "journey", label: "Journey", fullLabel: "Journey Videos", icon: "🎬" },
  ];

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Victories, achievements, and the story of my tech journey
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile: Stacked tabs */}
          <div className="flex flex-col sm:hidden gap-3 px-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-sm ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-900 border border-gray-700 text-gray-300"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.fullLabel}</span>
              </button>
            ))}
          </div>

          {/* Desktop: Horizontal tabs */}
          <div className="hidden sm:flex justify-center gap-3 md:gap-4 lg:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 md:gap-3 text-sm md:text-base ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 transform scale-105"
                    : "bg-gray-900 border border-gray-700 text-gray-300"
                }`}
              >
                <span className="text-lg md:text-xl">{tab.icon}</span>
                <span className="hidden md:inline">{tab.fullLabel}</span>
                <span className="md:hidden">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Victories Tab Content */}
        {activeTab === "victories" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="bg-gray-900 border border-gray-800 rounded-lg sm:rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <ImagePlaceholder item={hackathon} type="victory" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">
                    {hackathon.achievement}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Journey Tab Content */}
        {activeTab === "journey" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {journeyVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900 border border-gray-800 rounded-lg sm:rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <VideoPlaceholder video={video} />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {video.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;