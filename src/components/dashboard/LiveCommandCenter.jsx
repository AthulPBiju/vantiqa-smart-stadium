import { useState, useEffect } from "react";
import Panel from "../ui/Panel";
import Badge from "../ui/Badge";
import { useDashboard } from "../../context/DashboardContext";

import {
  MapPinned,
  Car,
  Ambulance,
  UtensilsCrossed,
  Train,
} from "lucide-react";

export default function LiveCommandCenter() {

  const { dashboardData } = useDashboard();

  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);

  useEffect(() => {

    const updatedZones = [

      {
        id: 1,
        name: "North Gate",
        status: "green",
        value: "41%",
        icon: <MapPinned size={18} />,
      },

      {
        id: 2,
        name: "East Gate",
        status:
          dashboardData.eastGate >= 90
            ? "red"
            : dashboardData.eastGate >= 70
            ? "yellow"
            : "green",
        value: `${dashboardData.eastGate}%`,
        icon: <MapPinned size={18} />,
      },

      {
        id: 3,
        name: "West Gate",
        status: "green",
        value: "48%",
        icon: <MapPinned size={18} />,
      },

      {
        id: 4,
        name: "Food Court",
        status: dashboardData.aiApproved ? "green" : "yellow",
        value: dashboardData.aiApproved ? "56%" : "72%",
        icon: <UtensilsCrossed size={18} />,
      },

      {
        id: 5,
        name: "Parking",
        status: dashboardData.aiApproved ? "green" : "yellow",
        value: dashboardData.aiApproved ? "52%" : "81%",
        icon: <Car size={18} />,
      },

      {
        id: 6,
        name: "Medical",
        status: "green",
        value: "Ready",
        icon: <Ambulance size={18} />,
      },

      {
        id: 7,
        name: "Metro",
        status: "green",
        value: dashboardData.aiApproved ? "Extra Service" : "On Time",
        icon: <Train size={18} />,
      },

    ];

    setZones(updatedZones);

    if (!selectedZone) {
      setSelectedZone(updatedZones[1]);
    } else {
      const latest = updatedZones.find(
        zone => zone.id === selectedZone.id
      );
      setSelectedZone(latest);
    }

  }, [dashboardData]);

  const colors = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };

  if (!selectedZone) return null;

  return (

    <Panel className="h-full">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Live Command Center
        </h2>

        <Badge text="LIVE" color="green" />

      </div>

      <div className="space-y-3">

        {zones.map((zone) => (

          <div
            key={zone.id}
            onClick={() => setSelectedZone(zone)}
            className={`rounded-xl p-4 cursor-pointer transition-all duration-300 flex justify-between items-center ${
              selectedZone.id === zone.id
                ? "border border-cyan-500 bg-cyan-900/30 scale-[1.02] shadow-lg shadow-cyan-500/20"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >

            <div className="flex items-center gap-3">

              {zone.icon}

              <div
                className={`w-3 h-3 rounded-full ${colors[zone.status]}`}
              />

              <span>{zone.name}</span>

            </div>

            <span
              className={`font-bold ${
                zone.status === "red"
                  ? "text-red-400"
                  : zone.status === "yellow"
                  ? "text-yellow-300"
                  : "text-green-400"
              }`}
            >
              {zone.value}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-6 rounded-xl bg-slate-900 border border-slate-700 p-5">

        <h3 className="text-xl font-semibold mb-4">
          Selected Zone
        </h3>

        <p className="text-cyan-400 text-xl font-bold">
          {selectedZone.name}
        </p>

        <p className="mt-2 text-slate-400">
          Current Status:
          <span className="ml-2 font-bold text-white">
            {selectedZone.value}
          </span>
        </p>

        <div className="mt-5">

          <p className="font-semibold mb-3">
            AI Recommendation
          </p>

          {selectedZone.name === "East Gate" ? (

            dashboardData.aiApproved ? (

              <ul className="space-y-2 text-green-300">

                <li>✓ Gate D opened successfully</li>

                <li>✓ 8 volunteers deployed</li>

                <li>✓ Smart traffic diversion activated</li>

                <li>✓ Congestion reduced by 28%</li>

              </ul>

            ) : (

              <ul className="space-y-2 text-slate-300">

                <li>✓ Open Gate D immediately</li>

                <li>✓ Deploy 8 volunteers</li>

                <li>✓ Broadcast bilingual alert</li>

                <li>✓ Redirect visitors to West Gate</li>

              </ul>

            )

          ) : selectedZone.name === "Parking" ? (

            <ul className="space-y-2 text-slate-300">

              <li>✓ Open Parking P3</li>

              <li>✓ Redirect incoming vehicles</li>

              <li>✓ Update navigation boards</li>

            </ul>

          ) : selectedZone.name === "Food Court" ? (

            <ul className="space-y-2 text-slate-300">

              <li>✓ Open additional food counters</li>

              <li>✓ Increase staff deployment</li>

            </ul>

          ) : selectedZone.name === "Medical" ? (

            <ul className="space-y-2 text-slate-300">

              <li>✓ Medical teams on standby</li>

              <li>✓ Emergency route clear</li>

            </ul>

          ) : (

            <ul className="space-y-2 text-slate-300">

              <li>✓ Normal operation</li>

              <li>✓ Continue live monitoring</li>

            </ul>

          )}

        </div>

      </div>

    </Panel>

  );

}