import React from "react";
import { Link } from "react-router-dom";
import { HardHat, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <HardHat className="h-20 w-20 text-[#FFB800] mx-auto mb-8" />
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="w-12 h-[2px] bg-[#FFB800]"></span>
          <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
            Page Not Found
          </span>
          <span className="w-12 h-[2px] bg-[#FFB800]"></span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-8">
          404
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          This section is still under construction. The page you're looking
          for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-[#FFB800] text-[#121212] px-10 py-5 font-black text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(255,184,0,0.3)] uppercase tracking-wider"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
