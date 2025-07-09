// app/components/TeamLeadership.js
"use client";
import { Trophy, Users, Star, Zap, Target, Award } from "lucide-react";
import Image from "next/image";

const TeamLeadership = () => {
  return (
    <section
      id="teamgcoey"
      
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Leading Team GCOEY
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Spearheading innovation and excellence in competitive programming at
            Government College of Engineering, Yavatmal
          </p>
        </div>

        <div className="space-y-8">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
          </div>

          {/* Hero Image Section - Full Width on Large Devices */}
          <div className="relative z-10 mb-16">
            <div className="lg:w-full lg:max-w-none relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-2xl shadow-2xl">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                  width={300}
                  height={300}
                    src="/photos/gcoey.jpg"
                    alt="Team GCOEY - Leading innovation in competitive programming"
                    className="object-cover w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <span className="text-white text-lg">Team GCOEY</span>
                    </div>
                  </div>
                </div>

                {/* Floating achievement badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-slate-900">
  <div className="text-center">
    <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-white mx-auto" />
    <p className="text-white font-bold text-xs sm:text-sm mt-1">
      Excellence
    </p>
    <p className="text-yellow-100 text-[10px] sm:text-xs">Leader</p>
  </div>
</div>

              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Column - Main Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Description */}
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-600/30 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg shadow-lg w-fit">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Team GCOEY
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I proudly lead{" "}
                  <span className="text-cyan-400 font-semibold">
                    Team GCOEY
                  </span>{" "}
                  — the premier competitive programming team representing{" "}
                  <span className="text-purple-400 font-semibold">
                    Government College of Engineering, Yavatmal
                  </span>
                  . Our mission is to cultivate algorithmic thinking and foster
                  innovation through collaborative problem-solving.
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 p-4 sm:p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Technical Excellence
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Algorithmic problem solving, advanced data structures, and
                    optimization techniques
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-4 sm:p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Innovation Hub
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Hackathons, Ideathons, and cutting-edge project development
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  Our Achievements
                </h4>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Under my leadership, Team GCOEY consistently excels at
                  prestigious contests and hackathons across India, establishing
                  ourselves as a formidable force in the competitive programming
                  landscape.
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 sm:p-4 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Our flagship events,{" "}
                    <span className="text-cyan-400 font-semibold">
                      C-Rush 1.0 & 2.0
                    </span>
                    , have become a cornerstone for nurturing young talent and
                    building a thriving culture of competitive programming on
                    campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Unified Stats */}
            <div className="space-y-6 lg:space-y-8">
              {/* All Stats in One Organized Container */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  Team GCOEY Statistics
                </h4>

                {/* Main Performance Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400">
                      32
                    </div>
                    <div className="text-cyan-300 text-xs sm:text-sm">
                      National Events
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400">
                      18
                    </div>
                    <div className="text-purple-300 text-xs sm:text-sm">
                      Hackathons
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-900/40 to-pink-800/30 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400">
                      14
                    </div>
                    <div className="text-pink-300 text-xs sm:text-sm">
                      Project Expos
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-yellow-900/40 to-yellow-800/30 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400">
                      13
                    </div>
                    <div className="text-yellow-300 text-xs sm:text-sm">
                      Wins
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-900/40 to-green-800/30 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-green-400">
                      3
                    </div>
                    <div className="text-green-300 text-xs sm:text-sm">
                      States
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400">
                      25
                    </div>
                    <div className="text-blue-300 text-xs sm:text-sm">
                      Cities Covered
                    </div>
                  </div>
                </div>

                {/* Team & Event Stats */}
                <div className="border-t border-slate-600/30 pt-4 sm:pt-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400">
                        45-50
                      </div>
                      <div className="text-indigo-300 text-xs sm:text-sm">
                        Team Members
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400">
                        2
                      </div>
                      <div className="text-orange-300 text-xs sm:text-sm">
                        Events Organized
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-teal-900/40 to-teal-800/30 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                      <div className="text-lg sm:text-2xl font-bold text-teal-400">
                        50
                      </div>
                      <div className="text-teal-300 text-xs sm:text-sm">
                        Participation
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-red-900/40 to-red-800/30 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                      <div className="text-lg sm:text-2xl font-bold text-red-400">
                        9
                      </div>
                      <div className="text-red-300 text-xs sm:text-sm">
                        Winners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center relative z-10">
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-600/30 to-cyan-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-xs sm:text-sm">
                National Hackathons
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600/30 to-purple-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-purple-300 font-medium text-xs sm:text-sm">
                Project Expos
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-600/30 to-pink-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-pink-500/40 hover:border-pink-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
              <span className="text-pink-300 font-medium text-xs sm:text-sm">
                Team Excellence
              </span>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="text-sm">
                Building the future of competitive programming
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeadership;
