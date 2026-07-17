import Panel from "../ui/Panel";
import { PlayCircle, CheckCircle2 } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const messages = {
  0: "Ready to begin the VANTIQA simulation.",
  1: "Crowd surge detected at East Gate.",
  2: "AI is analysing the incident and generating recommendations.",
  3: "Mitigation strategy is being executed.",
  4: "Mission stabilized. Stadium operations are normal.",
  5: "Presentation completed successfully.",
};

export default function DemoBanner() {

  const {
    demoRunning,
    demoStep,
    startDemo,
  } = useDashboard();

  const progress = demoStep * 20;

  return (

    <Panel className="mb-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left Section */}

        <div className="flex-1">

          <div className="flex items-center gap-3">

            <h2 className="text-2xl font-bold">

              {demoRunning
                ? "🎬 Live Presentation"
                : "Presentation Mode"}

            </h2>

            {demoRunning && (

              <span className="flex items-center gap-1 rounded-full bg-green-500/15 border border-green-500/30 px-3 py-1 text-xs font-semibold text-green-400">

                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

                LIVE

              </span>

            )}

          </div>

          <p className="mt-3 text-slate-400">

            {messages[demoStep]}

          </p>

          {/* Progress */}

          <div className="mt-6">

            <div className="flex justify-between text-xs text-slate-400 mb-2">

              <span>

                Demo Progress

              </span>

              <span>

                {progress}%

              </span>

            </div>

            <div className="h-2 rounded-full overflow-hidden bg-slate-700">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-green-400 transition-all duration-1000"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex flex-col items-end gap-3">

          <button
            disabled={demoRunning}
            onClick={startDemo}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >

            <PlayCircle size={20} />

            {demoRunning
              ? "Running Demo..."
              : "Start Demo"}

          </button>

          {demoStep === 5 && (

            <div className="flex items-center gap-2 text-green-400 text-sm">

              <CheckCircle2 size={18} />

              Demo Completed

            </div>

          )}

        </div>

      </div>

    </Panel>

  );

}