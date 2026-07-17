import Panel from "../ui/Panel";
import Badge from "../ui/Badge";

const incidents = [
  {
    id: 1,
    title: "East Gate Congestion",
    priority: "HIGH",
    status: "Active",
  },
  {
    id: 2,
    title: "Parking Overflow",
    priority: "MEDIUM",
    status: "Monitoring",
  },
  {
    id: 3,
    title: "Medical Assistance",
    priority: "LOW",
    status: "Resolved",
  },
];

export default function IncidentList() {

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Active Incidents
      </h2>

      <div className="space-y-4">

        {incidents.map((incident) => (

          <div
            key={incident.id}
            className="rounded-xl bg-slate-800 p-4"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  {incident.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {incident.status}
                </p>

              </div>

              <Badge
                text={incident.priority}
                color={
                  incident.priority === "HIGH"
                    ? "red"
                    : incident.priority === "MEDIUM"
                    ? "yellow"
                    : "green"
                }
              />

            </div>

          </div>

        ))}

      </div>

    </Panel>

  );

}