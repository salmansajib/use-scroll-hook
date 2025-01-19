import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  // show back-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } group text-gray-900 fixed bottom-5 right-5 bg-gray-50/10 backdrop-blur border border-gray-300 hover:border-gray-800 p-3 rounded-full focus:outline-none animate-bounce z-50`}
    >
      <ChevronsUp size={24} />
    </button>
  );
}

export default BackToTop;
