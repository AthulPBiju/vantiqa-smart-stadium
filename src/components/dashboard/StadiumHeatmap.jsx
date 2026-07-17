import { Activity, Radar } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const baseZones = [
  {
    name: "North Gate",
    top: "10%",
    left: "42%",
    crowd: 41,
  },
  {
    name: "East Gate",
    top: "42%",
    left: "88%",
    crowd: 94,
  },
  {
    name: "West Gate",
    top: "42%",
    left: "2%",
    crowd: 48,
  },
  {
    name: "Food Court",
    top: "68%",
    left: "42%",
    crowd: 72,
  },
  {
    name: "Parking",
    top: "90%",
    left: "70%",
    crowd: 81,
  },
];

export default function StadiumHeatmap({
  selected = null,
  setSelected = null,
}) {
  const { dashboardData } = useDashboard();

  const zones = baseZones.map((zone) => {
    if (zone.name === "East Gate") {
      const crowd = dashboardData.eastGate;

      return {
        ...zone,
        crowd,
        color:
          crowd > 80
            ? "red"
            : crowd > 70
            ? "yellow"
            : "green",
      };
    }

    if (zone.name === "Parking") {
      const crowd = dashboardData.aiApproved
        ? 52
        : 81;

      return {
        ...zone,
        crowd,
        color:
          crowd > 80
            ? "yellow"
            : "green",
      };
    }

    return {
      ...zone,
      color:
        zone.crowd > 70
          ? "yellow"
          : "green",
    };
  });

  const activeZone =
    zones.find(
      (zone) => zone.name === selected?.name
    ) ??
    zones.find(
      (zone) => zone.name === "East Gate"
    ) ??
    zones[0];

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#101826]/90 p-6 shadow-xl backdrop-blur-xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Stadium Digital Twin
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI Live Crowd Heatmap
          </p>

        </div>

        <div className="flex items-center gap-2 text-cyan-400">

          <Radar
            size={20}
            className="animate-pulse"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold">
            LIVE
          </span>

        </div>

      </div>

      {/* Stadium */}

      <div className="relative h-[470px] overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 via-[#101826] to-slate-900">

        {/* Outer Stadium */}

        <div className="absolute inset-12 rounded-full border-[10px] border-cyan-500">

          <div className="absolute inset-10 rounded-full border border-slate-600">

            <div className="absolute inset-12 rounded-full border border-slate-700"></div>

          </div>

        </div>

        {/* Heat Zones */}

        {zones.map((zone) => (

          <button
            key={zone.name}
            onClick={() => setSelected?.(zone)}
            aria-label={`${zone.name} - Crowd Density ${zone.crowd}%`}
            title={`${zone.name} (${zone.crowd}%)`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: zone.top,
              left: zone.left,
            }}
          >

            <div
              className={`relative flex items-center justify-center transition-all duration-500 ${
                activeZone.name === zone.name
                  ? "scale-125"
                  : ""
              }`}
            >

              {/* Glow */}

              <div
                aria-hidden="true"
                className={`absolute h-10 w-10 rounded-full blur-lg opacity-70 animate-pulse ${
                  zone.color === "red"
                    ? "bg-red-500"
                    : zone.color === "yellow"
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
              />

              {/* Dot */}

              <div
                aria-hidden="true"
                className={`relative h-5 w-5 rounded-full border-2 border-white ${
                  zone.color === "red"
                    ? "bg-red-500"
                    : zone.color === "yellow"
                    ? "bg-yellow-400"
                    : "bg-green-500"
                } ${
                  activeZone.name === zone.name
                    ? "ring-4 ring-cyan-400"
                    : ""
                }`}
              />

            </div>

          </button>

        ))}

      </div>

      {/* Zone Details */}

      <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/80 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold text-cyan-400">
              {activeZone.name}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Live Crowd Density
            </p>

          </div>

          <div className="flex items-center gap-2 text-cyan-400">

            <Activity
              size={18}
              className="animate-pulse"
              aria-hidden="true"
            />

            LIVE

          </div>

        </div>

        {/* Progress */}

        <div className="mt-6">

          <div className="mb-2 flex justify-between">

            <span>Crowd Level</span>

            <span className="font-bold">
              {activeZone.crowd}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">

            <div
              className={`h-full transition-all duration-1000 ${
                activeZone.crowd > 80
                  ? "bg-red-500"
                  : activeZone.crowd > 70
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
              style={{
                width: `${activeZone.crowd}%`,
              }}
            />

          </div>

        </div>

        {/* Status */}

        <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/50 p-4">

          <p className="leading-7 text-slate-300">

            {activeZone.crowd > 90 &&
              "🚨 Severe congestion detected. AI recommends immediate crowd diversion and deployment of additional security personnel."}

            {activeZone.crowd > 70 &&
              activeZone.crowd <= 90 &&
              "⚠ Heavy pedestrian movement detected. AI is actively monitoring the situation and preparing mitigation strategies."}

            {activeZone.crowd <= 70 &&
              "✅ Crowd movement remains within safe operational limits. No intervention is currently required."}

          </p>

        </div>

      </div>

    </div>
  );
}