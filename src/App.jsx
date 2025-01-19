import { useState } from "react";
import ScrollAnimation from "./components/ScrollAnimation";
import { motion, useScroll } from "motion/react";
import { useEffect } from "react";
import { ChevronsUp } from "lucide-react";

function App() {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  // show back-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-[300vh] relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-full bg-red-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* back to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 border border-gray-300 hover:border-gray-800 p-3 rounded-full focus:outline-none animate-bounce"
        >
          <ChevronsUp size={24} color="#111827" />
        </button>
      )}

      <main>
        <div className="min-h-[100vh]">
          <h1 className="text-7xl font-semibold text-center pt-10">Scroll</h1>
        </div>
        <ScrollAnimation />
        <div className="min-h-[100vh]"></div>
      </main>
    </div>
  );
}

export default App;
