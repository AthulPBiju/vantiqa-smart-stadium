import Panel from "../ui/Panel";

const stats = [

  {
    title:"Messages Sent",
    value:"1,284"
  },

  {
    title:"Delivery Rate",
    value:"99.3%"
  },

  {
    title:"Languages",
    value:"5"
  },

  {
    title:"Avg Delivery",
    value:"2.1 sec"
  }

];

export default function CommunicationStats(){

  return(

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Communication Statistics
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {stats.map((item)=>(

          <div
            key={item.title}
            className="rounded-xl bg-slate-800 p-5"
          >

            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <h3 className="mt-3 text-3xl font-bold text-cyan-400">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </Panel>

  );

}