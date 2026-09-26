"use client";

import { useEffect } from "react";

// Fades [data-reveal] elements in as they enter the viewport. Elements already
// on screen at load are shown immediately; nothing is hidden without JS or
// when the user prefers reduced motion.
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.setAttribute("data-revealed", "");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els
      .filter((el) => !el.hasAttribute("data-revealed"))
      .forEach((el) => observer.observe(el));

    document.documentElement.classList.add("reveal-armed");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-armed");
    };
  }, []);

  return null;
}
