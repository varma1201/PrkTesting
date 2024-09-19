import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (value) => {
    if (contentRef.current) {
      return value * -(contentRef.current.scrollHeight - window.innerHeight);
    }
    return 0;
  });

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", (e) => {
        e.preventDefault();
        window.scrollTo(0, content.scrollTop);
      });
    }
  }, []);

  return (
    <motion.div
      ref={contentRef}
      style={{ y }}
      className="smooth-scroll-container"
      layout
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
