import Panel from "../ui/Panel";
import { ShieldCheck, Activity } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function MissionStatus() {
  const { dashboardData } = useDashboard();

  const healthColor =
    dashboardData.missionStatus >= 95
      ? "text-green-400"
      : dashboardData.missionStatus >= 85
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <Panel>

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-sm text-slate-400">
            Mission Status
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Operational Health
          </h2>

        </div>

        <div className="flex items-center gap-3">

          <ShieldCheck className={healthColor} size={28} />

          <div
            className={`h-3 w-3 rounded-full animate-pulse ${
              dashboardData.aiApproved
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          />

        </div>

      </div>

      {/* Progress */}

      <div>

        <div className="flex justify-between items-center mb-2">

          <span className="text-slate-300">
            System Health
          </span>

          <span className={`font-bold ${healthColor}`}>
            {dashboardData.missionStatus}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-1000"
            style={{
              width: `${dashboardData.missionStatus}%`,
            }}
          />

        </div>

        <div className="mt-3 flex justify-between text-sm">

          <span className="text-slate-500">
            Last Updated
          </span>

          <span className="text-cyan-300 flex items-center gap-2">

            <Activity size={14} />

            Live

          </span>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">

          <p className="text-sm text-slate-400">
            Fans
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            52,431
          </h3>

          <p className="mt-2 text-xs text-green-400">
            ● Live
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">

          <p className="text-sm text-slate-400">
            Volunteers
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {dashboardData.aiApproved ? 822 : 814}
          </h3>

          <p className="mt-2 text-xs text-cyan-400">
            ● Active
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">

          <p className="text-sm text-slate-400">
            Security
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {dashboardData.aiApproved ? 334 : 326}
          </h3>

          <p className="mt-2 text-xs text-cyan-400">
            ● Monitoring
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">

          <p className="text-sm text-slate-400">
            Medical Teams
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            18
          </h3>

          <p className="mt-2 text-xs text-green-400">
            ● Ready
          </p>

        </div>

      </div>

      {/* AI Status */}

      <div
        className={`mt-8 rounded-xl border p-5 transition-all duration-500 ${
          dashboardData.aiApproved
            ? "border-green-500 bg-green-500/10"
            : "border-yellow-500 bg-yellow-500/10"
        }`}
      >

        <h3
          className={`font-semibold ${
            dashboardData.aiApproved
              ? "text-green-400"
              : "text-yellow-400"
          }`}
        >
          {dashboardData.aiApproved
            ? "✓ Mission Stabilized"
            : "⚠ AI Monitoring Active"}
        </h3>

        <p className="mt-3 text-slate-300">

          {dashboardData.aiApproved
            ? "AI mitigation successfully reduced congestion. Stadium operations have returned to stable conditions."
            : "The AI platform is continuously monitoring crowd movement and preparing response strategies."}

        </p>

      </div>

    </Panel>
  );
}