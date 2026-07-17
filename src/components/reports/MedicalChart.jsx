import Panel from "../ui/Panel";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Minor", value: 14 },
  { name: "Moderate", value: 5 },
  { name: "Critical", value: 1 },
];

const colors = [
  "#22c55e",
  "#facc15",
  "#ef4444",
];

export default function MedicalChart() {
  return (
    <Panel>

      <h2 className="text-xl font-bold mb-5">
        Medical Incidents
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={colors[index]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </Panel>
  );
}