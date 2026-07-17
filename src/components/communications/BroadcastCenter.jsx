import toast from "react-hot-toast";
import Panel from "../ui/Panel";
import Badge from "../ui/Badge";
import { RadioTower, Volume2 } from "lucide-react";

export default function BroadcastCenter() {
  return (

    <Panel>

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <RadioTower
            size={30}
            className="text-cyan-400"
          />

          <div>

            <h2 className="text-2xl font-bold">
              Live Broadcast
            </h2>

            <p className="text-slate-400 text-sm">
              Stadium Announcement System
            </p>

          </div>

        </div>

        <Badge
          text="LIVE"
          color="green"
        />

      </div>

      <div className="mt-8 rounded-xl bg-slate-900 border border-slate-700 p-5">

        <h3 className="font-semibold text-cyan-400">
          Current Announcement
        </h3>

        <p className="mt-4 text-lg leading-8">

          Gate D has been opened to reduce
          congestion near East Gate.

          Please follow staff instructions.

        </p>

      </div>

      <button
        onClick={() =>
            toast.success("Broadcast sent successfully.")
        }
        className="mt-6 w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 py-3 flex justify-center items-center gap-2 font-semibold transition"
      >

        <Volume2 size={18}/>

        Broadcast Again

      </button>

    </Panel>

  );
}