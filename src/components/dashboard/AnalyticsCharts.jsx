import Panel from "../ui/Panel";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const crowdData = [
  { time: "21:00", crowd: 52 },
  { time: "21:05", crowd: 60 },
  { time: "21:10", crowd: 74 },
  { time: "21:15", crowd: 81 },
  { time: "21:20", crowd: 94 },
  { time: "21:25", crowd: 63 },
];

const transportData = [
  { name: "Metro", value: 96 },
  { name: "Bus", value: 82 },
  { name: "Taxi", value: 74 },
  { name: "Parking", value: 68 },
];

export default function AnalyticsCharts() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">

      <Panel>

        <h2 className="text-2xl font-bold mb-6">
          Crowd Density Trend
        </h2>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={crowdData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="crowd"
                stroke="#06b6d4"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </Panel>

      <Panel>

        <h2 className="text-2xl font-bold mb-6">
          Transport Performance
        </h2>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={transportData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#22c55e"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </Panel>

    </div>
  );
}