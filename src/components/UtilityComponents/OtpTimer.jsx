import React, { useState, useEffect } from "react";

const OtpTimer = ({ duration, onTimerComplete }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval and trigger onTimerComplete when the timer reaches 0
    if (seconds === 0) {
      clearInterval(timer);
      onTimerComplete();
    }

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [seconds, onTimerComplete]);

  // Format the remaining seconds to display as MM:SS format
  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  return (
    
      <span className="font-medium text-green-400">{formattedTime}</span>
  );
};

export default OtpTimer;
