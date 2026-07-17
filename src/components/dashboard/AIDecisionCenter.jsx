import Panel from "../ui/Panel";
import {
  Brain,
  Clock3,
  Users,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

export default function AIDecisionCenter() {

  const {
    dashboardData,
    approveDecision,
    aiProgress,
    demoStep,
  } = useDashboard();

  const analysing =
    demoStep >= 2 &&
    demoStep < 3;

  return (

    <Panel>

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div
          className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
            analysing
              ? "bg-cyan-500/30 animate-pulse"
              : "bg-cyan-500/20"
          }`}
        >

          {analysing ? (

            <LoaderCircle
              size={26}
              className="text-cyan-400 animate-spin"
            />

          ) : (

            <Brain
              size={26}
              className="text-cyan-400"
            />

          )}

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            AI Decision Center
          </h2>

          <p className="text-sm text-slate-400">
            Autonomous Decision Support Engine
          </p>

        </div>

      </div>

      {/* AI Confidence */}

      <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">

        <div className="flex justify-between mb-3">

          <span>
            AI Confidence
          </span>

          <span className="font-bold text-cyan-400">

            {analysing
              ? `${aiProgress}%`
              : `${dashboardData.confidence}%`}

          </span>

        </div>

        <div className="h-3 rounded-full overflow-hidden bg-slate-700">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-green-400 transition-all duration-300"
            style={{
              width: analysing
                ? `${aiProgress}%`
                : `${dashboardData.confidence}%`,
            }}
          />

        </div>

        <div className="mt-4 flex items-center gap-2 text-sm">

          {analysing ? (

            <>
              <LoaderCircle
                size={16}
                className="animate-spin text-cyan-400"
              />

              <span className="text-cyan-300">
                Analysing crowd behaviour...
              </span>
            </>

          ) : dashboardData.aiApproved ? (

            <span className="text-green-400">
              ✓ AI Recommendation Approved
            </span>

          ) : (

            <span className="text-slate-400">
              Awaiting AI Execution
            </span>

          )}

        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="rounded-xl bg-slate-900 p-4">

          <Clock3
            size={22}
            className="text-yellow-400 mb-2"
          />

          <p className="text-sm text-slate-400">
            Time Saved
          </p>

          <h3 className="text-xl font-bold">

            {dashboardData.aiApproved
              ? "12 min"
              : "--"}

          </h3>

        </div>

        <div className="rounded-xl bg-slate-900 p-4">

          <Users
            size={22}
            className="text-green-400 mb-2"
          />

          <p className="text-sm text-slate-400">
            Crowd Reduction
          </p>

          <h3 className="text-xl font-bold">

            {dashboardData.aiApproved
              ? "31%"
              : "--"}

          </h3>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-6 rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-5">

        <div className="flex items-center gap-2 mb-3">

          <CheckCircle2
            size={22}
            className="text-cyan-400"
          />

          <h3 className="font-bold">
            AI Recommendation
          </h3>

        </div>

        <p className="leading-7 text-slate-300">

          Open Gate D, deploy eight volunteers,
          redirect pedestrian traffic and increase
          metro frequency to reduce congestion.

        </p>

      </div>

      {/* Button */}

      <button

        onClick={approveDecision}

        disabled={
          dashboardData.aiApproved ||
          analysing
        }

        className={`
          mt-8
          w-full
          rounded-xl
          py-4
          text-lg
          font-bold
          transition-all
          duration-300

          ${
            dashboardData.aiApproved

              ? "bg-green-600"

              : analysing

              ? "bg-slate-700"

              : "bg-cyan-500 hover:bg-cyan-400 hover:scale-[1.02]"
          }
        `}
      >

        {

          dashboardData.aiApproved

            ? "✓ Recommendation Approved"

            : analysing

            ? "AI Processing..."

            : "Approve Recommendation"

        }

      </button>

    </Panel>

  );

}