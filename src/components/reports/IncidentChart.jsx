import Panel from "../ui/Panel";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { type: "Crowd", count: 18 },
  { type: "Medical", count: 7 },
  { type: "Transport", count: 11 },
  { type: "Weather", count: 4 },
];

export default function IncidentChart() {
  return (
    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Incident Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="type" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#06b6d4"
              radius={[6,6,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </Panel>
  );
}