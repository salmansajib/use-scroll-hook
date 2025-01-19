import ScrollAnimation from "./components/ScrollAnimation";
import Progressbar from "./components/Progressbar";
import BackToTop from "./components/BackToTop";
import { ArrowDown } from "lucide-react";

function App() {
  return (
    <div className="min-h-[300vh] bg-gray-50 relative">
      {/* Progress bar */}
      <Progressbar />

      {/* back to top button */}
      <BackToTop />

      <main>
        <div className="min-h-[100vh]">
          <h1 className="text-7xl font-semibold text-center pt-[7rem] space-y-5">
            <span>Scroll Down</span>
            <ArrowDown
              className="text-center w-full animate-bounce"
              size={36}
              strokeWidth={3}
            />
          </h1>
        </div>
        <ScrollAnimation />
        <div className="min-h-[100vh]"></div>
      </main>
    </div>
  );
}

export default App;
