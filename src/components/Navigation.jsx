import React from "react";
import { Link } from "react-router-dom";
import {
  HardHat,
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#121212]/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <HardHat className="h-10 w-10 text-[#FFB800] transition-transform group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter leading-none">
                TITANCORE<span className="text-[#FFB800]">.</span>
              </span>
              <span className="text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                Construction Ltd
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#FFB800] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#FFB800] text-[#121212] px-8 py-3 rounded-none font-black text-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,184,0,0.3)] flex items-center gap-2"
            >
              <Phone size={16} fill="currentColor" />
              GET A QUOTE
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121212] absolute top-full left-0 w-full border-t border-[#FFB800]/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-2xl font-black uppercase text-white hover:text-[#FFB800] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 w-full bg-[#FFB800] text-[#121212] py-5 font-black text-center block text-lg"
              onClick={() => setIsOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB800] via-[#FFD700] to-[#FFB800]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <a href="/" className="flex items-center space-x-2 mb-8 group">
              <HardHat className="h-10 w-10 text-[#FFB800]" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">
                  TITANCORE<span className="text-[#FFB800]">.</span>
                </span>
                <span className="text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                  Construction Ltd
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              A legacy of excellence in civil engineering and infrastructure. We
              build the foundations of tomorrow with unwavering commitment to
              quality and safety.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-none hover:bg-[#FFB800] hover:text-[#121212] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Projects", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="text-gray-400 hover:text-[#FFB800] transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#FFB800] mr-0 group-hover:mr-2 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-white">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB800] p-3 text-[#121212]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider mb-1">
                    Headquarters
                  </p>
                  <p className="text-gray-400">
                    123 Construction Way, Industrial Heights, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB800] p-3 text-[#121212]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider mb-1">
                    Call Support
                  </p>
                  <p className="text-gray-400">
                    +1 (555) 123-4567 | +1 (555) 987-6543
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB800] p-3 text-[#121212]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <p className="text-gray-400">
                    info@titancore-construction.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} TitanCore Construction Ltd. Built for
            Excellence.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Safety Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
