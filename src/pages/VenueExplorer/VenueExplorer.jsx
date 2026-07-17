import { useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import StadiumHeatmap from "../../components/dashboard/StadiumHeatmap";
import VenueInfoPanel from "../../components/venue/VenueInfoPanel";
import Panel from "../../components/ui/Panel";
import { useDashboard } from "../../context/DashboardContext";

import {
  MapPinned,
  ParkingCircle,
  Train,
  UtensilsCrossed,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const initialZones = [
  {
    name: "North Gate",
    crowd: 41,
  },
  {
    name: "East Gate",
    crowd: 94,
  },
  {
    name: "West Gate",
    crowd: 48,
  },
  {
    name: "Food Court",
    crowd: 72,
  },
  {
    name: "Parking",
    crowd: 81,
  },
];

export default function VenueExplorer() {

  const { dashboardData } = useDashboard();

  const [selectedZone, setSelectedZone] = useState(initialZones[1]);

  const facilities = [
    {
      name: "North Gate",
      icon: <MapPinned size={28} className="mx-auto text-cyan-400" />,
    },
    {
      name: "Parking",
      icon: <ParkingCircle size={28} className="mx-auto text-yellow-400" />,
    },
    {
      name: "Metro",
      icon: <Train size={28} className="mx-auto text-green-400" />,
    },
    {
      name: "Food Court",
      icon: <UtensilsCrossed size={28} className="mx-auto text-orange-400" />,
    },
    {
      name: "Security",
      icon: <ShieldCheck size={28} className="mx-auto text-blue-400" />,
    },
    {
      name: "Medical",
      icon: <HeartPulse size={28} className="mx-auto text-red-400" />,
    },
  ];

  return (
    <div>

      <SectionHeader
        title="Venue Explorer"
        subtitle="Interactive Digital Twin of the stadium powered by AI."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <StadiumHeatmap
          selected={selectedZone}
          setSelected={setSelectedZone}
        />

        <VenueInfoPanel
          zone={selectedZone}
          dashboardData={dashboardData}
        />

      </div>

      <Panel className="mt-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Nearby Facilities
          </h2>

          <span className="text-sm text-slate-400">
            Smart Infrastructure
          </span>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">

          {facilities.map((facility) => (

            <div
              key={facility.name}
              className="
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                p-5
                text-center
                transition-all
                duration-300
                hover:border-cyan-500
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >

              {facility.icon}

              <p className="mt-3 font-medium">
                {facility.name}
              </p>

            </div>

          ))}

        </div>

      </Panel>

    </div>
  );
}