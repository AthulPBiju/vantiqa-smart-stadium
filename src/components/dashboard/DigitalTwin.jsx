import Panel from "../ui/Panel";
import Badge from "../ui/Badge";

const zones = [
  { name: "North Gate", status: "green" },
  { name: "East Gate", status: "red" },
  { name: "West Gate", status: "green" },
  { name: "Food Court", status: "yellow" },
  { name: "Medical", status: "green" },
  { name: "Parking", status: "green" },
  { name: "Metro", status: "yellow" },
];

export default function DigitalTwin() {
  return (
    <Panel className="col-span-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Live Stadium Digital Twin
        </h2>

        <Badge
          text="LIVE"
          color="green"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">

        <div></div>

        <Badge
          text="North Gate"
          color="green"
        />

        <div></div>

        <Badge
          text="West Gate"
          color="green"
        />

        <div className="rounded-full border-4 border-cyan-500 p-10 text-center font-bold text-xl">
          🏟 Stadium
        </div>

        <Badge
          text="East Gate"
          color="red"
        />

        <div>
          <Badge
            text="Parking"
            color="green"
          />
        </div>

        <Badge
          text="Food Court"
          color="yellow"
        />

        <div>
          <Badge
            text="Medical"
            color="green"
          />
        </div>

        <div></div>

        <Badge
          text="Metro"
          color="yellow"
        />

      </div>
    </Panel>
  );
}