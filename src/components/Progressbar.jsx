import { motion, useScroll } from "motion/react";

function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-2 w-full bg-red-400 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default Progressbar;
