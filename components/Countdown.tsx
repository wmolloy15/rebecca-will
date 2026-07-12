// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/wedding";

export default function Countdown() {
  const targetDate = new Date(weddingData.date).getTime();
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        return;
      }
      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(daysRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-8">Counting Down</h2>
        <div className="bg-cream p-8 rounded-xl shadow-sm inline-block">
          <div className="heading text-6xl md:text-8xl text-ink">{days}</div>
          <div className="subheading text-lg md:text-xl uppercase tracking-widest text-ink/60 mt-2">
            Days
          </div>
        </div>
      </div>
    </section>
  );
}