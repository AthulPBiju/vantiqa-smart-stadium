import { useState } from "react";
import Panel from "../ui/Panel";
import toast from "react-hot-toast";

export default function BroadcastPanel() {

  const [message, setMessage] = useState("");

  const sendBroadcast = () => {

    if (!message.trim()) {

      toast.error("Please enter a broadcast message.");

      return;

    }

    toast.success("Emergency broadcast sent.");

    setMessage("");

  };

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Emergency Broadcast
      </h2>

      <textarea
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter emergency announcement..."
        className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 resize-none"
      />

      <button
        onClick={sendBroadcast}
        className="mt-5 w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 py-3 font-semibold transition"
      >
        Send Broadcast
      </button>

    </Panel>

  );

}