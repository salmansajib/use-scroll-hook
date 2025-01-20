import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

function ScrollAnimation() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    console.log(latestValue);
  });

  const scale = useTransform(scrollY, [230, 1000], [1, 1.5]);

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="w-[60vw] h-[400px] bg-blue-500 rounded-[1rem]"
      ></motion.div>
    </div>
  );
}

export default ScrollAnimation;
