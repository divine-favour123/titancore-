import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/siteData";
import { Play, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const SubHero = ({ title, subtitle }) => (
  <section className="pt-48 pb-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 bg-[#FFB800]/5 pattern-dots opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <span className="w-12 h-[2px] bg-[#FFB800]"></span>
        <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
          {subtitle}
        </span>
        <span className="w-12 h-[2px] bg-[#FFB800]"></span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
        {title}
        <span className="text-[#FFB800]">.</span>
      </h1>
    </div>
  </section>
);

const serviceImages = {
  road: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000&auto=format&fit=crop",
  bridge:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
  residential:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
  commercial:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  renovation:
    "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000&auto=format&fit=crop",
  civil:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#121212]">
      <SubHero title="Our Services" subtitle="Specialized Expertise" />

      {/* Intro */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
                Comprehensive Engineering <br />
                <span className="text-[#FFB800]">& Construction Solutions</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                "We provide end-to-end infrastructure development, from
                preliminary feasibility studies to final structural realization.
                Every project is handled with precision and a commitment to
                longevity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-16 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative group"
              >
                <div
                  className={`absolute -inset-4 border-2 border-[#FFB800]/20 z-0 ${index % 2 === 1 ? "translate-x-4 translate-y-4" : "-translate-x-4 -translate-y-4"}`}
                ></div>
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10"
                />
                <div className="absolute top-8 right-8 z-20">
                  <div className="w-16 h-16 bg-[#FFB800] text-[#121212] flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-2xl font-black text-2xl">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-12 h-[2px] bg-[#FFB800]"></span>
                  <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
                    Industrial Grade
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed mb-10">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-[#FFB800]/10 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#121212] transition-all">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-gray-300 font-bold uppercase text-xs tracking-widest">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-[#FFB800] text-[#121212] px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-all"
                >
                  Inquire Now <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0F0F0F] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            subtitle="Ready to start?"
            title="Transforming Visions into Landmarks"
            dark
          />
          <p className="text-gray-400 text-lg mb-12">
            Whether it is a trans-continental highway or a luxury residential
            complex, our engineering prowess is at your disposal.
          </p>
          <Link
            to="/contact"
            className="bg-[#FFB800] text-[#121212] px-12 py-6 font-black text-xl hover:bg-white transition-all shadow-[10px_10px_0px_0px_rgba(255,184,0,0.2)]"
          >
            TALK TO AN ENGINEER
          </Link>
        </div>
      </section>
    </div>
  );
}

const SectionHeading = ({ subtitle, title, dark = false }) => (
  <div className="mb-12">
    <div className="flex items-center justify-center space-x-3 mb-6">
      <span className="w-12 h-[2px] bg-[#FFB800]"></span>
      <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </span>
      <span className="w-12 h-[2px] bg-[#FFB800]"></span>
    </div>
    <h2
      className={`text-5xl font-black uppercase tracking-tight ${dark ? "text-white" : "text-[#121212]"}`}
    >
      {title}
    </h2>
  </div>
);
