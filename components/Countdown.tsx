"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

function calculateDaysUntilWedding() {
  const weddingDate = new Date(wedding.date);
  const today = new Date();

  const difference = weddingDate.getTime() - today.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return Math.max(days, 0);
}

export default function Countdown() {
  const [days, setDays] = useState(calculateDaysUntilWedding);

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(calculateDaysUntilWedding());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 text-center">
      <p className="text-6xl font-light tracking-[-0.04em]">
        {days}
      </p>

      <p className="mt-2 text-sm uppercase tracking-[0.3em] opacity-70">
        Days to Go
      </p>
    </div>
  );
}