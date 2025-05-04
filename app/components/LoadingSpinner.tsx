import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [percentage, setPercentage] = useState(0);
  const circleControls = useAnimationControls();

  // Simulate percentage increase to 100%
  useEffect(() => {
    const duration = 3000; // Total duration in ms (3 seconds)
    const increment = 100 / (duration / 30); // Increment per 30ms
    let currentPercentage = 0;

    const interval = setInterval(() => {
      currentPercentage += increment;
      if (currentPercentage >= 100) {
        setPercentage(100);
        circleControls.start({
          strokeDasharray: `276.46 276.46`,
          strokeDashoffset: 0,
          transition: { duration: 0.1 }, // Ensure final frame is complete
        });
        clearInterval(interval);
      } else {
        const newPercentage = Math.min(Math.round(currentPercentage), 100);
        setPercentage(newPercentage);
        circleControls.start({
          strokeDasharray: `${(newPercentage / 100) * 276.46} 276.46`,
          strokeDashoffset: 0,
          transition: { duration: 0.03, ease: "linear" }, // Smooth per frame
        });
      }
    }, 30); // Update every 30ms

    return () => clearInterval(interval);
  }, [circleControls]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Circular Progress Bar */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            {/* Progress circle */}
            <motion.circle
              className="text-primary"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 276.46", strokeDashoffset: 0 }}
              animate={circleControls}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {percentage}%
            </motion.span>
          </div>
        </div>
        {/* Loading Text */}
        <motion.p
          className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Loading Portfolio...
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
