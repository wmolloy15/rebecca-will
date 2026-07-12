// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/wedding";

export default function Countdown() {
  const targetDate = new Date(weddingData.date).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-8">Counting Down</h2>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-cream p-4 rounded-xl shadow-sm">
              <div className="heading text-4xl md:text-6xl text-ink">
                {String(value).padStart(2, "0")}
              </div>
              <div className="subheading text-sm md:text-base uppercase tracking-widest text-ink/60">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}