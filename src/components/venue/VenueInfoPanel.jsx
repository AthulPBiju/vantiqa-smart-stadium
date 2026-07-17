import Panel from "../ui/Panel";
import Badge from "../ui/Badge";

export default function VenueInfoPanel({ zone, dashboardData }) {

  if (!zone) return null;

  const crowd =
    zone.name === "East Gate"
      ? dashboardData.eastGate
      : zone.crowd;

  const status =
    crowd > 90
      ? "HIGH"
      : crowd > 70
      ? "MEDIUM"
      : "LOW";

  return (

    <Panel>

      <h2 className="text-2xl font-bold">
        Zone Intelligence
      </h2>

      <div className="mt-6">

        <h3 className="text-cyan-400 text-xl font-bold">
          {zone.name}
        </h3>

        <div className="mt-5 space-y-3">

          <div className="flex justify-between">

            <span>Crowd Density</span>

            <span className="font-bold">
              {crowd}%
            </span>

          </div>

          <div className="flex justify-between">

            <span>Status</span>

            <Badge
              text={status}
              color={
                status === "HIGH"
                  ? "red"
                  : status === "MEDIUM"
                  ? "yellow"
                  : "green"
              }
            />

          </div>

        </div>

        <div className="mt-8">

          <h4 className="font-semibold mb-3">
            AI Recommendation
          </h4>

          {

            status==="HIGH" &&

            <ul className="space-y-2 text-slate-300">

              <li>✓ Open additional gate</li>

              <li>✓ Deploy volunteers</li>

              <li>✓ Broadcast alert</li>

            </ul>

          }

          {

            status==="MEDIUM" &&

            <ul className="space-y-2 text-slate-300">

              <li>✓ Monitor continuously</li>

              <li>✓ Prepare reserve staff</li>

            </ul>

          }

          {

            status==="LOW" &&

            <ul className="space-y-2 text-green-300">

              <li>✓ Situation stable</li>

              <li>✓ Continue monitoring</li>

            </ul>

          }

        </div>

        <div className="mt-8">

          <h4 className="font-semibold mb-3">
            Nearby Facilities
          </h4>

          <ul className="space-y-2 text-slate-400">

            <li>🏥 Medical Center</li>

            <li>🚇 Metro Station</li>

            <li>🅿 Parking Zone</li>

            <li>🍔 Food Court</li>

          </ul>

        </div>

      </div>

    </Panel>

  );

}