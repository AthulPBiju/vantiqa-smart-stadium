import Panel from "../ui/Panel";

const channels=[

"SMS",

"Mobile App",

"Public Display",

"Radio",

"Emergency Siren"

];

export default function EmergencyChannels(){

  return(

    <Panel>

      <h2 className="text-2xl font-bold mb-6">

        Emergency Channels

      </h2>

      <div className="space-y-4">

        {channels.map(channel=>(

          <div

            key={channel}

            className="flex justify-between items-center rounded-xl bg-slate-800 p-4"

          >

            <span>

              {channel}

            </span>

            <span className="text-green-400 font-semibold">

              ONLINE

            </span>

          </div>

        ))}

      </div>

    </Panel>

  );

}