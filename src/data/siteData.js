import React from "react";

export const servicesData = [
  {
    id: "road",
    title: "Road Construction",
    description:
      "High-durability highways and urban roads built with advanced paving technology.",
    benefits: [
      "Superior durability",
      "Optimized drainage",
      "Safe traffic flow",
    ],
    icon: "Road",
  },
  {
    id: "bridge",
    title: "Bridge Engineering",
    description:
      "Specialized structural engineering for bridges and overpasses of all scales.",
    benefits: ["Seismic resistance", "Load-bearing efficiency", "Longevity"],
    icon: "Bridge",
  },
  {
    id: "residential",
    title: "Residential Buildings",
    description: "Modern luxury apartments and community housing projects.",
    benefits: ["Smart home ready", "Premium finishing", "Energy efficient"],
    icon: "Building",
  },
  {
    id: "commercial",
    title: "Commercial Properties",
    description:
      "Corporate offices and retail spaces designed for productivity and growth.",
    benefits: [
      "Strategic layouts",
      "Modern glass facades",
      "Sustainable design",
    ],
    icon: "Building2",
  },
  {
    id: "renovation",
    title: "Renovation & Retrofitting",
    description:
      "Revitalizing existing structures with modern upgrades and safety standards.",
    benefits: [
      "Cost effective",
      "Structural reinforcement",
      "Modern aesthetic",
    ],
    icon: "Hammer",
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description:
      "Infrastructural development including drainage, water systems, and land clearing.",
    benefits: [
      "Holistic planning",
      "Environmental safety",
      "Precision grading",
    ],
    icon: "Construction",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Highway Alpha Expansion",
    category: "Road",
    image: "road-image",
    description:
      "A 50km multi-lane highway expansion connecting major industrial hubs.",
  },
  {
    id: 2,
    title: "Skyline Luxury Towers",
    category: "Residential",
    image: "residential-image",
    description: "Two 40-story residential towers with premium amenities.",
  },
  {
    id: 3,
    title: "River Delta Bridge",
    category: "Bridge",
    image: "bridge-image",
    description:
      "A cable-stayed bridge spanning 800 meters across the Delta river.",
  },
  {
    id: 4,
    title: "Grand Plaza Mall",
    category: "Commercial",
    image: "commercial-image",
    description: "Ultra-modern shopping complex with 200+ retail outlets.",
  },
  {
    id: 5,
    title: "Heritage Revitalization",
    category: "Renovation",
    image: "road-image", // Placeholder
    description: "Full restoration of a 100-year-old municipal building.",
  },
  {
    id: 6,
    title: "Smart City Drainage",
    category: "Civil",
    image: "bridge-image", // Placeholder
    description:
      "Underground infrastructure upgrade for the new metropolitan district.",
  },
];

export const stats = [
  { label: "Completed Projects", value: "500+" },
  { label: "Experienced Staff", value: "250+" },
  { label: "Years in Business", value: "25+" },
  { label: "Safety Record", value: "100%" },
];

export const testimonials = [
  {
    name: "Robert Miller",
    role: "City Planner",
    content:
      "TitanCore delivered the Highway Alpha project ahead of schedule with zero safety incidents. Their professionalism is unmatched.",
  },
  {
    name: "Sarah Chen",
    role: "Real Estate Developer",
    content:
      "The quality of the Skyline Towers is exceptional. Every detail was handled with precision.",
  },
];
