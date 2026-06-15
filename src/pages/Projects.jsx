import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data/siteData";
import { Filter, X, ArrowRight, Expand } from "lucide-react";

const SubHero = ({ title, subtitle }) => (
  <section className="pt-48 pb-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 bg-[#FFB800]/5 pattern-dots opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-12 h-[2px] bg-[#FFB800]"></span>
        <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
          {subtitle}
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
        {title}
        <span className="text-[#FFB800]">.</span>
      </h1>
    </div>
  </section>
);

const projectImages = {
  Road: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000&auto=format&fit=crop",
  Bridge:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
  Residential:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
  Commercial:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  Renovation:
    "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000&auto=format&fit=crop",
  Civil:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-[#121212] min-h-screen pb-32">
      <SubHero title="Portfolio" subtitle="Showcasing Excellence" />

      {/* Filter Section */}
      <section className="py-12 bg-[#1A1A1A] border-b border-white/5 sticky top-[72px] z-40 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Filter className="text-[#FFB800]" size={20} />
              <span className="text-white font-bold uppercase tracking-widest text-xs">
                Filter By:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-xs font-black uppercase tracking-widest border transition-all ${filter === cat ? "bg-[#FFB800] border-[#FFB800] text-[#121212]" : "border-white/10 text-gray-400 hover:border-[#FFB800] hover:text-white"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[450px] overflow-hidden bg-[#1A1A1A]"
                >
                  <img
                    src={projectImages[project.category] || projectImages.Road}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="bg-[#FFB800] text-[#121212] text-[10px] font-black uppercase px-3 py-1 inline-block mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#FFB800] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      {project.description}
                    </p>
                    <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] group/btn">
                      View Details{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </button>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-[#FFB800] hover:text-[#121212] transition-all">
                      <Expand size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">
                No Projects Found
              </h3>
              <p className="text-gray-500">
                We are currently updating this category. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Overlay */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-left">
              <h4 className="text-5xl font-black text-white mb-2">98%</h4>
              <p className="text-[#FFB800] font-bold uppercase tracking-[0.2em] text-xs">
                Customer Satisfaction
              </p>
            </div>
            <div className="text-left border-l border-white/10 pl-12">
              <h4 className="text-5xl font-black text-white mb-2">12M</h4>
              <p className="text-[#FFB800] font-bold uppercase tracking-[0.2em] text-xs">
                Safe Work Hours
              </p>
            </div>
            <div className="text-left border-l border-white/10 pl-12">
              <h4 className="text-5xl font-black text-white mb-2">45+</h4>
              <p className="text-[#FFB800] font-bold uppercase tracking-[0.2em] text-xs">
                Active Sites
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
