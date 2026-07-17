import Panel from "../ui/Panel";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "18:00", value: 99 },
  { time: "18:30", value: 98 },
  { time: "19:00", value: 97 },
  { time: "19:30", value: 96 },
  { time: "20:00", value: 94 },
];

export default function EnergyChart() {
  return (
    <Panel>

      <h2 className="text-xl font-bold mb-5">
        Energy Efficiency
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="time" />

            <Tooltip />

            <Area
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e55"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </Panel>
  );
}