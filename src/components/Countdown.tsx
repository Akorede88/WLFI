import { useEffect, useState } from "react";

// Set your target end date here (YYYY-MM-DD)
const TARGET_DATE = new Date("2025-10-11"); // Example: 3 weeks 4 days from Sept 20, 2025

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  // Zero out the time for accurate day calculation
  now.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  const diffMs = targetDate.getTime() - now.getTime();
  const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const weeks = Math.floor(diffDays / 7);
  const days = diffDays % 7;
  return { weeks, days };
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TARGET_DATE));

  useEffect(() => {
    // Update at midnight every day
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();
    const timeout = setTimeout(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE));
    }, msUntilMidnight + 1000); // Add 1s buffer
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  if (timeLeft.weeks === 0 && timeLeft.days === 0) {
    return <span>Countdown complete!</span>;
  }

  return (
    <span>
      {timeLeft.weeks > 0 && `${timeLeft.weeks} week${timeLeft.weeks > 1 ? "s" : ""}`} 
      {timeLeft.days > 0 && `${timeLeft.days} day${timeLeft.days > 1 ? "s" : ""}`}
    </span>
  );
};

export default Countdown;
