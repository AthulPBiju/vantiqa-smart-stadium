import Panel from "../ui/Panel";

const logs = [

  {
    time: "20:15",
    event: "Gate D announcement broadcast"
  },

  {
    time: "20:20",
    event: "Medical advisory sent"
  },

  {
    time: "20:24",
    event: "Parking update delivered"
  },

  {
    time: "20:31",
    event: "Metro frequency increased"
  },

];

export default function CommunicationLog() {

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Communication Log
      </h2>

      <div className="space-y-5">

        {logs.map((log) => (

          <div
            key={log.time}
            className="flex gap-4"
          >

            <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

            <div>

              <p className="text-cyan-400 text-sm">
                {log.time}
              </p>

              <p className="text-slate-300">
                {log.event}
              </p>

            </div>

          </div>

        ))}

      </div>

    </Panel>

  );

}