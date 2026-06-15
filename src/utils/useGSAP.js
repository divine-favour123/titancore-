import { useState, useEffect } from "react";

// Module-level state so GSAP is loaded only once across all components
let gsapLoaded = false;
let loadPromise = null;
const callbacks = [];

function notifyAll() {
  callbacks.forEach((cb) => cb());
}

export default function useGSAP() {
  const [isLoaded, setIsLoaded] = useState(gsapLoaded);

  useEffect(() => {
    if (gsapLoaded) {
      setIsLoaded(true);
      return;
    }

    const handler = () => setIsLoaded(true);
    callbacks.push(handler);

    if (!loadPromise) {
      loadPromise = new Promise((resolve) => {
        const script1 = document.createElement("script");
        script1.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        script1.onload = () => {
          const script2 = document.createElement("script");
          script2.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
          script2.onload = () => {
            if (window.gsap && window.ScrollTrigger) {
              window.gsap.registerPlugin(window.ScrollTrigger);
            }
            gsapLoaded = true;
            notifyAll();
            resolve();
          };
          document.head.appendChild(script2);
        };
        document.head.appendChild(script1);
      });
    }

    return () => {
      const idx = callbacks.indexOf(handler);
      if (idx > -1) callbacks.splice(idx, 1);
    };
  }, []);

  return {
    isLoaded,
    gsap: typeof window !== "undefined" ? window.gsap : null,
    ScrollTrigger: typeof window !== "undefined" ? window.ScrollTrigger : null,
  };
}
