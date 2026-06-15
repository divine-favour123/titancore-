import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const ContactInfoCard = ({ icon: Icon, title, content, subcontent }) => (
  <div className="bg-[#1A1A1A] p-10 border border-white/5 relative group overflow-hidden">
    <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-[#FFB800]/10 transition-colors transform group-hover:scale-150 transition-transform duration-700">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-[#FFB800] text-[#121212] flex items-center justify-center mb-8 transform -rotate-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-white uppercase tracking-wider mb-4">
        {title}
      </h3>
      <p className="text-white text-lg font-bold mb-2">{content}</p>
      {subcontent && (
        <p className="text-gray-500 text-sm font-medium">{subcontent}</p>
      )}
    </div>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Road Construction",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // No backend connected yet (frontend-only build).
    // Simulate a brief send delay, then show the success state.
    // TODO: replace this with a real Supabase insert / API call later.
    setTimeout(() => {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Road Construction",
        message: "",
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-24 bg-[#0F0F0F] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#FFB800]/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-[2px] bg-[#FFB800]"></span>
            <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
              Get In Touch
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Let's Start <br />
            <span className="text-[#FFB800]">Building.</span>
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <ContactInfoCard
              icon={Phone}
              title="Call Us Directly"
              content="+1 (555) 123-4567"
              subcontent="Mon-Sat: 8AM - 6PM"
            />
            <ContactInfoCard
              icon={Mail}
              title="Email Inquiry"
              content="info@titancore.com"
              subcontent="Expect a reply within 24hrs"
            />
            <ContactInfoCard
              icon={MapPin}
              title="Headquarters"
              content="123 Construction Way"
              subcontent="Industrial Heights, NY 10001"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 shadow-[20px_20px_0px_0px_#FFB800]"
            >
              <h2 className="text-3xl font-black text-[#121212] uppercase tracking-tighter mb-8">
                Send us a Message
              </h2>

              {success ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-[#121212] uppercase tracking-tighter mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-8">
                    Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-[#121212] text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-[#FFB800] hover:text-[#121212] transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#FFB800] transition-colors font-bold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#FFB800] transition-colors font-bold"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#FFB800] transition-colors font-bold"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                      Project Category
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#FFB800] transition-colors font-bold appearance-none"
                    >
                      <option>Road Construction</option>
                      <option>Bridge Engineering</option>
                      <option>Residential Building</option>
                      <option>Commercial Property</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#FFB800] transition-colors font-bold"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  {error && (
                    <div className="bg-red-50 border border-red-200 p-4 text-red-600 text-sm font-bold">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#121212] text-white py-6 font-black uppercase tracking-widest hover:bg-[#FFB800] hover:text-[#121212] transition-all flex items-center justify-center gap-3 group disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit Proposal"}
                    <Send
                      size={18}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info & Map */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">
                  Work With <span className="text-[#FFB800]">The Best</span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  TitanCore is always looking for ambitious projects and
                  strategic partnerships. Our team of world-class engineers is
                  ready to consult on your next infrastructure challenge.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expert feasibility analysis",
                    "Strategic site planning",
                    "Regulatory compliance guidance",
                    "Precision cost estimation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs"
                    >
                      <CheckCircle2 className="text-[#FFB800]" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="h-[400px] bg-[#1A1A1A] relative group cursor-pointer overflow-hidden border border-white/5">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-[#FFB800]/10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#121212] p-6 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black uppercase text-xs tracking-widest mb-1">
                        Global HQ
                      </p>
                      <p className="text-gray-400 text-[10px]">
                        Industrial Zone, NY 10001
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-[#FFB800] font-black uppercase text-[10px] border-b border-[#FFB800]/20 pb-1"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-24 bg-[#0F0F0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800]">
              <MessageSquare size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">
                Have More Questions?
              </h4>
              <p className="text-gray-500">
                Check our frequently asked questions about our process and
                safety.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="text-[#FFB800] font-black uppercase tracking-[0.2em] text-sm border-b-2 border-[#FFB800] pb-2 hover:text-white hover:border-white transition-all"
          >
            View FAQ Support
          </a>
        </div>
      </section>
    </div>
  );
}
