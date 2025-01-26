import { motion, useScroll, useSpring } from "motion/react";

function Progressbar() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 h-[7px] w-full bg-gradient-to-r from-rose-300 to-green-300 z-50 origin-left"
      style={{
        scaleX: smoothProgress,
      }}
    />
  );
}

export default Progressbar;
