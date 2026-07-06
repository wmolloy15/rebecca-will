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
    <div className="text-center">
      <p className="site-number">
        {days}
      </p>

      <p className="site-smallcaps mt-5">
        Days to Go
      </p>
    </div>
  );
}