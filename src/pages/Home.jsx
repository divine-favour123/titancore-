import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  servicesData,
  stats,
  testimonials,
  projectsData,
} from "../data/siteData";
import { ArrowRight, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import useGSAP from "../utils/useGSAP";

const Hero = () => {
  const { isLoaded } = useGSAP();
  const heroRef = useRef(null);

  useEffect(() => {
    if (!isLoaded || !window.gsap) return;
    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 60, skewX: -4 },
          {
            opacity: 1,
            y: 0,
            skewX: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
    }, heroRef);
    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <video
          src="https://raw.createusercontent.com/9ae1259f-20c4-4af1-afcc-c4f20acaf8d9/"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="hero-badge flex items-center space-x-3 mb-6 opacity-0">
            <span className="w-12 h-[2px] bg-[#FFB800]"></span>
            <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
              Building the Future
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter overflow-hidden">
            <span className="hero-title-line block opacity-0">ENGINEERING</span>
            <span
              className="hero-title-line block text-transparent opacity-0"
              style={{ WebkitTextStroke: "1px white" }}
            >
              EXCELLENCE.
            </span>
          </h1>
          <p className="hero-sub text-xl text-gray-300 mb-12 max-w-xl leading-relaxed opacity-0">
            TitanCore Construction Ltd is a leader in civil engineering, road
            networks, and high-rise developments. Precision in every brick,
            integrity in every project.
          </p>
          <div className="flex flex-col sm:row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/projects"
              className="hero-btn opacity-0 bg-[#FFB800] text-[#121212] px-10 py-5 font-black text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(255,184,0,0.3)] inline-flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              Explore Projects <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="hero-btn opacity-0 border-2 border-white/20 text-white px-10 py-5 font-black text-lg hover:bg-white hover:text-[#121212] transition-all inline-flex items-center justify-center gap-2 uppercase tracking-widest backdrop-blur-sm"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll opacity-0 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[#FFB800] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Scroll Down
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#FFB800] to-transparent"></div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const { isLoaded } = useGSAP();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!isLoaded || !window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-heading",
            start: "top 85%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#121212] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="service-heading flex flex-col md:row md:items-end justify-between mb-20 gap-8 opacity-0">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-12 h-[2px] bg-[#FFB800]"></span>
              <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
                Specialization
              </span>
            </div>
            <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Our Core <span className="text-[#FFB800]">Expertise</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[#FFB800] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All Services <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className="service-card opacity-0 bg-[#1A1A1A] p-10 border border-white/5 relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB800]/5 -mr-12 -mt-12 rounded-full transition-all group-hover:scale-[3]"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FFB800] text-[#121212] flex items-center justify-center mb-8 transform -rotate-3 group-hover:rotate-6 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle2 size={14} className="text-[#FFB800] mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center font-bold text-[#FFB800] uppercase tracking-widest text-xs border-b-2 border-[#FFB800]/20 pb-1 hover:border-[#FFB800] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsCounter = () => {
  const { isLoaded } = useGSAP();
  const sectionRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!isLoaded || !window.gsap || !window.ScrollTrigger || triggered.current)
      return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      // Section pop-in
      gsap.fromTo(
        sectionRef.current,
        { scaleX: 0.95, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // Count-up for each stat
      const statEls = sectionRef.current.querySelectorAll(".stat-num");
      statEls.forEach((el) => {
        const raw = el.dataset.value || "0";
        const numeric = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
        const suffix = raw.replace(/[0-9.]/g, "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numeric,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });
      triggered.current = true;
    }, sectionRef);
    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#FFB800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div
                className="stat-num text-6xl font-black text-[#121212] mb-2 tracking-tighter"
                data-value={stat.value}
              >
                {stat.value}
              </div>
              <div className="text-[#121212]/60 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  const { isLoaded } = useGSAP();
  const sectionRef = useRef(null);

  const projectImages = [
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  ];

  useEffect(() => {
    if (!isLoaded || !window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proj-heading",
            start: "top 85%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".proj-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proj-card",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="proj-heading text-center mb-20 opacity-0">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="w-12 h-[2px] bg-[#FFB800]"></span>
            <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
              Portfolio
            </span>
            <span className="w-12 h-[2px] bg-[#FFB800]"></span>
          </div>
          <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tight">
            Flagship <span className="text-[#FFB800]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="proj-card opacity-0 relative group h-[500px] overflow-hidden"
            >
              <img
                src={projectImages[index % projectImages.length]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-[#FFB800] text-[#121212] text-[10px] font-black uppercase px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-white font-bold uppercase tracking-widest text-xs hover:text-[#FFB800] transition-colors"
                >
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="pt-0">
      <Hero />
      <ServicesGrid />
      <StatsCounter />
      <FeaturedProjects />

      {/* Testimonials */}
      <section className="py-32 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-12 h-[2px] bg-[#FFB800]"></span>
                <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
                  Feedback
                </span>
              </div>
              <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tight mb-8">
                What Our <br />
                <span className="text-[#FFB800]">Clients Say</span>
              </h2>
              <div className="flex space-x-4">
                <button className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFB800] hover:text-[#121212] transition-all">
                  <ChevronRight className="rotate-180" />
                </button>
                <button className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFB800] hover:text-[#121212] transition-all">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-[200px] font-black text-white/5 leading-none pointer-events-none italic">
                "
              </div>
              {testimonials.map((t, i) => (
                <div key={i} className={i === 0 ? "block" : "hidden"}>
                  <p className="text-2xl text-gray-300 italic mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-[#FFB800] font-bold text-sm uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFB800] p-16 md:p-24 flex flex-col md:row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 -mr-32 -mt-32 rotate-45"></div>
            <div className="max-w-2xl relative z-10">
              <h2 className="text-5xl font-black text-[#121212] uppercase tracking-tighter leading-none mb-6">
                Ready to Build Your <br />
                Next Big Project?
              </h2>
              <p className="text-[#121212]/80 text-xl font-medium">
                Let's discuss how TitanCore can bring your vision to life with
                industry-leading expertise.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-[#121212] text-[#FFB800] px-12 py-6 font-black text-xl hover:bg-white hover:text-[#121212] transition-all shadow-2xl relative z-10 shrink-0"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}