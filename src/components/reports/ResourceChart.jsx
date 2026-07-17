import Panel from "../ui/Panel";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Security", value: 38 },
  { name: "Medical", value: 18 },
  { name: "Volunteers", value: 27 },
  { name: "Transport", value: 17 },
];

const colors = [
  "#22d3ee",
  "#ef4444",
  "#22c55e",
  "#eab308",
];

export default function ResourceChart() {
  return (
    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Resource Allocation
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={colors[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </Panel>
  );
}