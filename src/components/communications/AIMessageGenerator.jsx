import { useState } from "react";
import Panel from "../ui/Panel";
import toast from "react-hot-toast";

const templates = {

  Congestion:
    "Please proceed to Gate D to reduce crowd congestion.",

  Weather:
    "Rain expected. Please use covered walkways.",

  Medical:
    "Medical assistance is available near Section B.",

};

export default function AIMessageGenerator() {

  const [type, setType] = useState("Congestion");

  const generate = () => {

    toast.success("AI message generated.");

  };

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        AI Message Generator
      </h2>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3"
      >

        {Object.keys(templates).map((item) => (

          <option key={item}>
            {item}
          </option>

        ))}

      </select>

      <div className="mt-6 rounded-xl bg-slate-900 border border-slate-700 p-5">

        <p className="leading-8">

          {templates[type]}

        </p>

      </div>

      <button
        onClick={generate}
        className="mt-5 w-full rounded-xl bg-green-600 hover:bg-green-500 py-3 font-semibold transition"
      >
        Generate Message
      </button>

    </Panel>

  );

}