import Panel from "../ui/Panel";

const history=[

{
time:"21:12",
message:"Gate D opened."
},

{
time:"21:15",
message:"Rain advisory issued."
},

{
time:"21:18",
message:"Medical team dispatched."
},

{
time:"21:22",
message:"Metro frequency increased."
},

{
time:"21:26",
message:"Crowd diverted successfully."
}

];

export default function BroadcastHistory(){

  return(

    <Panel>

      <h2 className="text-2xl font-bold mb-8">

        Broadcast History

      </h2>

      <div className="space-y-6">

        {history.map(item=>(

          <div

            key={item.time}

            className="flex gap-4"

          >

            <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"/>

            <div>

              <p className="text-cyan-400 text-sm">

                {item.time}

              </p>

              <p className="mt-1">

                {item.message}

              </p>

            </div>

          </div>

        ))}

      </div>

    </Panel>

  );

}