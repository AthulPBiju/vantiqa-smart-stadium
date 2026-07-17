import Panel from "../ui/Panel";
import {
  AlertTriangle,
  CheckCircle2,
  Brain,
  Info,
} from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function MissionTimeline() {

  const { timeline } = useDashboard();

  const getIcon = (type) => {

    switch (type) {

      case "danger":
        return (
          <AlertTriangle
            size={18}
            className="text-red-400"
          />
        );

      case "success":
        return (
          <CheckCircle2
            size={18}
            className="text-green-400"
          />
        );

      case "info":
        return (
          <Brain
            size={18}
            className="text-cyan-400"
          />
        );

      default:
        return (
          <Info
            size={18}
            className="text-slate-400"
          />
        );

    }

  };

  const getBorder = (type) => {

    switch (type) {

      case "danger":
        return "border-red-500";

      case "success":
        return "border-green-500";

      case "info":
        return "border-cyan-500";

      default:
        return "border-slate-600";

    }

  };

  return (

    <Panel>

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">

          Mission Timeline

        </h2>

        <span className="text-xs text-cyan-400">

          LIVE

        </span>

      </div>

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">

        {timeline.map((event, index) => (

          <div
            key={index}
            className={`
              rounded-xl
              border
              ${getBorder(event.type)}
              bg-slate-800/60
              p-4
              transition-all
              duration-500
              hover:scale-[1.02]
            `}
          >

            <div className="flex items-center gap-3">

              {getIcon(event.type)}

              <div className="flex-1">

                <p className="font-medium">

                  {event.message}

                </p>

                <p className="text-xs text-slate-400 mt-1">

                  {event.time}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </Panel>

  );

}