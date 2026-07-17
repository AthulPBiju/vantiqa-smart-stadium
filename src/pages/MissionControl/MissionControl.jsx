import SectionHeader from "../../components/common/SectionHeader";
import KpiCard from "../../components/cards/KpiCard";
import LiveCommandCenter from "../../components/dashboard/LiveCommandCenter";
import MissionTimeline from "../../components/dashboard/MissionTimeline";
import OperationsPulse from "../../components/dashboard/OperationsPulse";
import MissionStatus from "../../components/dashboard/MissionStatus";
import AIDecisionCenter from "../../components/dashboard/AIDecisionCenter";
import AITimeline from "../../components/dashboard/AITimeline";
import { useDashboard } from "../../context/DashboardContext";
import DemoBanner from "../../components/dashboard/DemoBanner";

import {
    Users,
    Bus,
    HeartPulse,
    Leaf,
} from "lucide-react";

export default function MissionControl() {
  const { dashboardData } = useDashboard();
  return (
    <div>

      <SectionHeader
        title="Mission Control"
        subtitle="Real-time operational overview and decision support."
      />

      <DemoBanner />

      <div className="grid grid-cols-1 gap-5 mb-8 md:grid-cols-2 xl:grid-cols-4">

        <KpiCard
          title="Crowd Density"
          value={`${dashboardData.crowdDensity}%`}
          icon={<Users size={24}/>}
          color="bg-cyan-500/20"
        />

        <KpiCard
          title="Transport Delay"
          value={`${dashboardData.transportDelay} min`}
          icon={<Bus size={24}/>}
          color="bg-yellow-500/20"
        />

        <KpiCard
          title="Medical Alerts"
          value="2"
          icon={<HeartPulse size={24}/>}
          color="bg-red-500/20"
        />

        <KpiCard
          title="Energy Efficiency"
          value={`${dashboardData.energyEfficiency}%`}
          icon={<Leaf size={24}/>}
          color="bg-green-500/20"
        />

      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <MissionStatus />

        <OperationsPulse />

        <MissionTimeline />

        <LiveCommandCenter />

      </div>
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">

        <AIDecisionCenter />

        <AITimeline />

      </div>
    </div>
    
  );
}