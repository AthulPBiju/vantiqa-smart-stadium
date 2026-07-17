import Panel from "../ui/Panel";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "18:00", crowd: 42 },
  { time: "18:30", crowd: 55 },
  { time: "19:00", crowd: 69 },
  { time: "19:30", crowd: 81 },
  { time: "20:00", crowd: 94 },
];

export default function CrowdTrendChart() {
  return (
    <Panel>
      <h2 className="text-xl font-bold mb-5">
        Crowd Density Trend
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="crowd"
              stroke="#22d3ee"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}