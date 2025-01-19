import ScrollAnimation from "./components/ScrollAnimation";
import Progressbar from "./components/Progressbar";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-[300vh] relative">
      {/* Progress bar */}
      <Progressbar />

      {/* back to top button */}
      <BackToTop />

      <main>
        <div className="min-h-[100vh]">
          <h1 className="text-7xl font-semibold text-center pt-10">
            Scroll Down
          </h1>
        </div>
        <ScrollAnimation />
        <div className="min-h-[100vh]"></div>
      </main>
    </div>
  );
}

export default App;
