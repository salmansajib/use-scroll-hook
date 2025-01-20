import { motion, useScroll } from "motion/react";

function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] w-full bg-gradient-to-r from-lime-300 to-indigo-400 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default Progressbar;
