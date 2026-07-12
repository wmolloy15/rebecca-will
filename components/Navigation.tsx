// components/Navigation.tsx
"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Countdown", href: "#countdown" },
  { label: "Venue", href: "#venue" },
  { label: "Note", href: "#note" },
  { label: "Sunset", href: "#sunset" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center space-x-6 md:space-x-10 text-sm md:text-base">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="heading uppercase tracking-widest text-ink/70 hover:text-ink transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}