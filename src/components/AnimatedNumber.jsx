import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const AnimatedNumber = ({ startNumber, targetNumber }) => {
  const [count, setCount] = useState(startNumber);
  const controls = useAnimate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < targetNumber) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval time for animation speed

    return () => clearInterval(intervalId);
  }, [targetNumber, startNumber]);

  const handleAnimate = async () => {
    const startDigits = startNumber.toString().split("");
    const targetDigits = targetNumber.toString().split("");

    // Ensure both numbers have the same number of digits
    const maxLength = Math.max(startDigits.length, targetDigits.length);
    startDigits.length = maxLength;
    startDigits.fill("0", startDigits.length - targetDigits.length, maxLength);

    await controls.start({ opacity: 1 }, { transition: { duration: 0.5 } });

    for (let i = 0; i < maxLength; i++) {
      await controls.start(
        { text: targetDigits[i] },
        {
          key: i,
          transition: { duration: 0.5 },
        }
      );
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={handleAnimate}>
      {count.toLocaleString()}
    </motion.div>
  );
};

export default AnimatedNumber;
