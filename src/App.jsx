import ScrollAnimation from "./components/ScrollAnimation";
import Progressbar from "./components/Progressbar";
import BackToTop from "./components/BackToTop";
import { ArrowDown } from "lucide-react";

function App() {
  return (
    <div className="min-h-[300vh] bg-slate-950 px-3 overflow-hidden">
      {/* Progress bar */}
      <Progressbar />

      {/* back to top button */}
      <BackToTop />

      <main>
        <div className="min-h-[100vh]">
          <h1 className="text-7xl font-semibold text-center pt-[7rem] space-y-5">
            <span className="bg-gradient-to-r from-rose-300 to-indigo-400 text-transparent bg-clip-text">
              Scroll Down
            </span>
            <ArrowDown
              className="text-center w-full animate-bounce"
              size={36}
              strokeWidth={3}
              color="#f5f3ff"
            />

            {/* circular text */}
            <svg
              style={{
                animation: "spin 25s linear infinite",
              }}
              className="max-w-[60vh] rounded-full mx-auto bg-transparent"
              xmlns="http://www.w3.org/2000/svg"
              xmlLang="en"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 500 500"
            >
              <title>Circular Text Path</title>
              <defs>
                {/* <!-- Define the gradient --> */}
                <linearGradient
                  id="textGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
                <path
                  id="textcircle"
                  d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                  transform="rotate(12,250,250)"
                />
              </defs>
              <g className="textcircle">
                <text
                  textLength="940"
                  className="text-xl font-semibold tracking-[6px] uppercase"
                  fill="url(#textGradient)"
                >
                  <textPath
                    xlinkHref="#textcircle"
                    aria-label="CSS & SVG are awesome"
                    textLength="940"
                  >
                    {/* CSS &amp; SVG are awesome CSS &amp; SVG are awesome &#160; */}
                    scroll down to see the use{" "}
                    <tspan className="text-2xl">&bull;</tspan> scroll from
                    motion in action <tspan className="text-2xl">&bull;</tspan>
                  </textPath>
                </text>
              </g>
            </svg>
          </h1>
        </div>
        <ScrollAnimation />
        <div className="min-h-[100vh] grid place-content-center">
          <h2 className="text-transparent bg-gradient-to-r from-rose-300 to-violet-400 bg-clip-text text-3xl w-full max-w-[500px] font-medium capitalize leading-tight text-center">
            Click on the button to go back to the top of the page.
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
