// app/components/Gallery.js
"use client";
import Image from "next/image";
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
      description:
        "Winners of the 24-hour hackathon at Tech-Carvaan 2025, held in Jalgaon.",
      image: "/photos/winnerja.jpg",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Hacksphere 2.0",
      date: "22 March 2025",
      achievement: "Winner - 8 Hour Hackathon",
      description:
        "Winners of Hacksphere 2.0, an 8-hour hackathon held at Ramdeobaba University, Nagpur.",
      image: "/photos/winnerH.jpg",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Ennovate25",
      date: "29 March 2025",
      achievement: "2nd Rank - National Level Project Competition",
      description:
        "Secured 2nd rank in Ennovate25 national level project competition at Ramdeobaba University, Nagpur.",
      image: "/photos/img12.jpg",
      icon: "🥈",
    },
    {
      id: 4,
      title: "Technovation Project Expo",
      date: "2025",
      achievement: "Winner - Project Expo",
      description:
        "Winners of Technovation Project Expo organized by IEEE SB SSGMCE, Shegaon.",
      image: "/photos/winnerS.jpg",
      icon: "🏆",
    },
    {
      id: 5,
      title: "Tech Axion 2025 Ideathon",
      date: "5 April 2025",
      achievement: "2nd Rank - Idea-thon",
      description:
        "Secured 2nd rank in Idea-thon at Tech Axion 2025, a national level technical fest at TGPCET, Nagpur.",
      image: "/photos/winnerN.jpg",
      icon: "🥈",
    },
    {
      id: 6,
      title: "Brahmax 1.0",
      date: "16-17 May 2025",
      achievement: "2nd Rank - BGIEM Jabalpur",
      description:
        "Secured 2nd rank in the 24-hour hackathon at BGIEM, Jabalpur, Madhya Pradesh.",
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
      description:
        "Leading our team and explaining projects during hackathons.",
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
          <Image
            width={300}
            height={300}
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
            onError={() => handleImageError(item.id, type)}
          />
        )}
        {(hasError || !item.image) && (
          <div className="w-full h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <span className="text-white text-sm">
                {type === "victory" ? "Victory" : "Video"}
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
            className="w-full h-64 object-contain bg-gray-800"
            controls
            preload="metadata"
            onError={() => handleVideoError(video.id)}
          >
            <source src={video.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {(hasError || !video.video) && (
          <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{video.icon}</div>
              <span className="text-white text-sm">Video</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="achievements"
      
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Victories, achievements, and the story of my tech journey
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { key: "victories", label: "Victories & Achievements", icon: "🏆" },
            { key: "journey", label: "Journey Videos", icon: "🎬" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                  : "bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Victories Tab */}
        {activeTab === "victories" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <ImagePlaceholder item={hackathon} type="victory" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-purple-300 font-semibold mb-2">
                    {hackathon.achievement}
                  </p>
                  <p className="text-gray-300">{hackathon.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Journey Videos Tab */}
        {activeTab === "journey" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {journeyVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <VideoPlaceholder video={video} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{video.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
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
