import React, { useState, useEffect } from 'react';
import '../css/ElevatorCounter.css'; // Import CSS for styling

const ElevatorCounter = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  // useEffect to update the counter when the count prop changes
  useEffect(() => {
    setCurrentCount(0); // Reset the counter
    const timer = setTimeout(() => {
      setCurrentCount(count);
    }, 1000); // Delay for smoother animation
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="elevator-counter">
      <div className="counter-value">{currentCount}</div>
    </div>
  );
};

export default ElevatorCounter;
