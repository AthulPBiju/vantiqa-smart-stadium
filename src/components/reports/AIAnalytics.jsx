import Panel from "../ui/Panel";
import { BrainCircuit } from "lucide-react";

export default function AIAnalytics() {
  return (
    <Panel>

      <div className="flex items-center gap-3 mb-6">

        <BrainCircuit
          className="text-cyan-400"
          size={30}
        />

        <h2 className="text-2xl font-bold">
          AI Performance
        </h2>

      </div>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>Predictions Generated</span>

          <span className="font-bold text-cyan-400">
            124
          </span>

        </div>

        <div className="flex justify-between">

          <span>Successful Decisions</span>

          <span className="font-bold text-green-400">
            118
          </span>

        </div>

        <div className="flex justify-between">

          <span>Prediction Accuracy</span>

          <span className="font-bold text-green-400">
            95%
          </span>

        </div>

        <div className="flex justify-between">

          <span>Average Response Time</span>

          <span className="font-bold text-yellow-400">
            8 sec
          </span>

        </div>

        <div className="mt-8 rounded-xl bg-cyan-900/20 border border-cyan-500 p-4">

          <h3 className="font-semibold text-cyan-400">
            AI Summary
          </h3>

          <p className="mt-2 text-slate-300">
            The AI system successfully optimized crowd flow,
            reduced congestion, and maintained operational
            efficiency throughout the event.
          </p>

        </div>

      </div>

    </Panel>
  );
}