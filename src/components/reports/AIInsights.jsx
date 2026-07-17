import Panel from "../ui/Panel";
import { BrainCircuit } from "lucide-react";

export default function AIInsights() {

  return (

    <Panel>

      <div className="flex items-center gap-3 mb-6">

        <BrainCircuit
          className="text-cyan-400"
          size={28}
        />

        <h2 className="text-xl font-bold">
          AI Insights
        </h2>

      </div>

      <div className="space-y-5">

        <div className="rounded-xl bg-slate-800 p-4">

          <h3 className="font-semibold text-cyan-400">
            Crowd Prediction
          </h3>

          <p className="text-slate-300 mt-2">
            East Gate congestion expected to reduce by
            28% within the next 15 minutes.
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-4">

          <h3 className="font-semibold text-green-400">
            Transport
          </h3>

          <p className="text-slate-300 mt-2">
            Metro operations remain stable.
            Parking occupancy expected to decrease.
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-4">

          <h3 className="font-semibold text-yellow-400">
            Recommendation
          </h3>

          <p className="text-slate-300 mt-2">
            Continue volunteer deployment
            for another 20 minutes.
          </p>

        </div>

      </div>

    </Panel>

  );

}