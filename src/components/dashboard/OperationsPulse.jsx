import Panel from "../ui/Panel";
import {
  AlertTriangle,
  Brain,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function OperationsPulse() {

  const { dashboardData } = useDashboard();

  const recommendations = {
    "Crowd Surge": [
      "Open Gate D",
      "Deploy 8 Volunteers",
      "Increase Metro Frequency",
      "Broadcast Crowd Guidance",
    ],

    Rain: [
      "Open Covered Walkways",
      "Deploy Cleaning Teams",
      "Issue Rain Alerts",
      "Slow Vehicle Movement",
    ],

    "Medical Emergency": [
      "Dispatch Medical Team",
      "Secure Incident Area",
      "Notify Nearby Staff",
      "Prepare Ambulance Route",
    ],

    "Transport Delay": [
      "Increase Shuttle Buses",
      "Notify Waiting Fans",
      "Coordinate With Metro",
      "Update Arrival Boards",
    ],

    Normal: [
      "Monitor Crowd",
      "Keep Security Active",
      "Continue Surveillance",
      "No Immediate Action",
    ],
  };

  return (

    <Panel>

      <h2 className="text-2xl font-semibold mb-6">
        Operations Pulse
      </h2>

      <div className="space-y-6">

        <div>

          <p className="text-sm text-slate-400 mb-2">
            Situation
          </p>

          <p className="text-slate-100">
            {dashboardData.alert}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-800 p-4">

            <div
              className={`flex items-center gap-2 ${
                dashboardData.risk === "HIGH"
                  ? "text-red-400"
                  : dashboardData.risk === "MEDIUM"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >

              {dashboardData.risk === "LOW"
                ? <CheckCircle2 size={18}/>
                : <AlertTriangle size={18}/>}

              Risk Level

            </div>

            <p className="mt-2 text-xl font-bold">

              {dashboardData.risk}

            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-4">

            <div className="flex items-center gap-2 text-cyan-400">

              <Brain size={18}/>

              AI Confidence

            </div>

            <p className="mt-2 text-xl font-bold">

              {dashboardData.confidence}%

            </p>

          </div>

        </div>

        <div>

          <p className="text-sm text-slate-400 mb-3">

            Recommended Actions

          </p>

          <ul className="space-y-2">

            {(recommendations[dashboardData.scenario] ??
              recommendations.Normal).map(action => (

              <li
                key={action}
                className="text-slate-200"
              >

                ✓ {action}

              </li>

            ))}

          </ul>

        </div>

        <div
          className={`flex items-center gap-2 font-medium ${
            dashboardData.aiApproved
              ? "text-green-400"
              : "text-yellow-400"
          }`}
        >

          <Clock size={18}/>

          {dashboardData.aiApproved
            ? "Mission successfully stabilized."
            : "AI monitoring live situation."}

        </div>

      </div>

    </Panel>

  );

}