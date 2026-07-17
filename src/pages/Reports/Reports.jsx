import SectionHeader from "../../components/common/SectionHeader";

import CrowdTrendChart from "../../components/reports/CrowdTrendChart";
import TransportChart from "../../components/reports/TransportChart";
import MedicalChart from "../../components/reports/MedicalChart";
import EnergyChart from "../../components/reports/EnergyChart";
import AIInsights from "../../components/reports/AIInsights";
import ReportSummary from "../../components/reports/ReportSummary";

export default function Reports() {

  return (

    <div>

      <SectionHeader
        title="Reports & Analytics"
        subtitle="Operational insights powered by AI and real-time stadium data."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <CrowdTrendChart />

        <TransportChart />

        <MedicalChart />

        <EnergyChart />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <AIInsights />

        <ReportSummary />

      </div>

    </div>

  );

}