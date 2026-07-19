"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/wedding";

export default function Countdown() {
  // Parse the date as UTC to avoid timezone shifts
  const targetDate = Date.UTC(2027, 10, 20); // Month is 0-indexed: November = 10
  const [days, setDays] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setDays(0);
        return;
      }

      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(daysRemaining);

      animationFrameId = requestAnimationFrame(updateCountdown);
    };

    // Start the loop
    animationFrameId = requestAnimationFrame(updateCountdown);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-16 px-4 bg-warm-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-20">Counting Down</h2>
        <div className="bg-warm-cream/80 p-6 rounded-xl shadow-sm inline-block border border-ink/10">
          <div className="heading text-6xl md:text-8xl text-ink">{days}</div>
          <div className="subheading text-lg md:text-xl uppercase tracking-widest text-ink/60 mt-2">
            Days
          </div>
        </div>
      </div>
    </section>
  );
}