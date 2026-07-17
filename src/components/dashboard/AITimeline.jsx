import Panel from "../ui/Panel";
import { useDashboard } from "../../context/DashboardContext";

export default function AITimeline() {

  const { timeline } = useDashboard();

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Live AI Timeline
      </h2>

      <div className="space-y-4 max-h-[450px] overflow-y-auto">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="border-l-2 border-cyan-500 pl-4"
          >

            <p className="text-xs text-slate-500">

              {item.time}

            </p>

            <p
              className={
                item.type === "danger"
                  ? "text-red-400"
                  : item.type === "success"
                  ? "text-green-400"
                  : "text-cyan-400"
              }
            >

              {item.message}

            </p>

          </div>

        ))}

      </div>

    </Panel>

  );

}