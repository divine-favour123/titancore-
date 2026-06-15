import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Award,
} from "lucide-react";

const SubHero = ({ title, subtitle }) => (
  <section className="pt-48 pb-24 bg-[#0F0F0F] relative overflow-hidden">
    <div className="absolute inset-0 bg-[#FFB800]/5 pattern-dots opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-12 h-[2px] bg-[#FFB800]"></span>
        <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
          {subtitle}
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
        {title}
        <span className="text-[#FFB800]">.</span>
      </h1>
    </div>
  </section>
);

const SectionHeading = ({ subtitle, title, dark = false }) => (
  <div className="mb-12">
    <div className="flex items-center space-x-3 mb-6">
      <span className="w-12 h-[2px] bg-[#FFB800]"></span>
      <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </span>
    </div>
    <h2
      className={`text-4xl md:text-5xl font-black uppercase tracking-tight ${dark ? "text-white" : "text-[#121212]"}`}
    >
      {title}
    </h2>
  </div>
);

export default function AboutPage() {
  return (
    <div className="bg-[#121212]">
      <SubHero title="About Us" subtitle="Who We Are" />

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFB800] z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
                alt="Our Team"
                className="relative z-10 w-full h-[600px] object-cover grayscale shadow-[30px_30px_0px_0px_#121212]"
              />
            </div>
            <div>
              <SectionHeading
                subtitle="Our Legacy"
                title="Building Trust Since 1998"
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TitanCore Construction Ltd started as a small family-owned firm
                with a single bulldozer and a dream to reshape the city's
                skyline. Today, we are one of the most respected engineering
                companies in the region.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Our success is built on three pillars: technical excellence,
                transparent communication, and an uncompromising stance on
                safety. We don't just build structures; we build relationships
                that last as long as our foundations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-[#FFB800] pl-6">
                  <div className="text-4xl font-black text-[#121212]">25+</div>
                  <div className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="border-l-4 border-[#FFB800] pl-6">
                  <div className="text-4xl font-black text-[#121212]">500+</div>
                  <div className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <SectionHeading subtitle="Purpose" title="Mission & Vision" dark />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#1A1A1A] p-16 border border-white/5 group hover:border-[#FFB800]/30 transition-all">
            <Target className="text-[#FFB800] w-16 h-16 mb-8" />
            <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-6">
              Our Mission
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To provide world-class engineering solutions that empower
              communities, drive economic growth, and set new benchmarks for
              sustainability in construction.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-16 border border-white/5 group hover:border-[#FFB800]/30 transition-all">
            <Eye className="text-[#FFB800] w-16 h-16 mb-8" />
            <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-6">
              Our Vision
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the premier construction partner globally, recognized for
              innovation, safety, and transforming ambitious designs into
              structural realities.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB800]/5 skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading
                subtitle="Uncompromising"
                title="Safety is Our Priority"
              />
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe that every worker should return home safely. Our ZERO
                HARM policy is implemented at every job site through rigorous
                training and state-of-the-art safety equipment.
              </p>
              <div className="space-y-4">
                {[
                  "OSHA Certified Safety Officers",
                  "Daily Site Safety Inspections",
                  "Rigorous Equipment Maintenance",
                  "Emergency Response Readiness",
                  "Ongoing Staff Safety Training",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 text-gray-700 font-bold"
                  >
                    <ShieldCheck className="text-[#FFB800]" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#121212] p-8 aspect-square flex flex-col justify-center items-center text-center group">
                <Award className="text-[#FFB800] w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  ISO 9001 Certified
                </span>
              </div>
              <div className="bg-[#FFB800] p-8 aspect-square flex flex-col justify-center items-center text-center group">
                <ShieldCheck className="text-[#121212] w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#121212] font-black uppercase tracking-widest text-xs">
                  Safety Excellence Award
                </span>
              </div>
              <div className="bg-[#FFB800] p-8 aspect-square flex flex-col justify-center items-center text-center group">
                <Users className="text-[#121212] w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#121212] font-black uppercase tracking-widest text-xs">
                  Expert Engineering Team
                </span>
              </div>
              <div className="bg-[#121212] p-8 aspect-square flex flex-col justify-center items-center text-center group">
                <CheckCircle2 className="text-[#FFB800] w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  100% Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Meet the Experts Behind <br />
            <span className="text-[#FFB800]">TitanCore Success</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#121212] px-12 py-5 font-black uppercase tracking-widest hover:bg-[#FFB800] transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
