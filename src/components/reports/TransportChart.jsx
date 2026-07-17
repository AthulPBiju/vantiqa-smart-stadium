import Panel from "../ui/Panel";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { route: "Metro", delay: 2 },
  { route: "Bus", delay: 6 },
  { route: "Taxi", delay: 4 },
  { route: "Parking", delay: 8 },
];

export default function TransportChart() {
  return (
    <Panel>
      <h2 className="text-xl font-bold mb-5">
        Transport Delays
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="route" />
            <Tooltip />
            <Bar dataKey="delay" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}