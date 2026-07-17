import { useState } from "react";
import Panel from "../../components/ui/Panel";
import { useDashboard } from "../../context/DashboardContext";

const scenarios = [
  {
    title: "Crowd Surge",
    description: "Large crowd gathers near East Gate.",
    color: "border-red-500",
  },
  {
    title: "Rain",
    description: "Heavy rain affects movement.",
    color: "border-cyan-500",
  },
  {
    title: "Medical Emergency",
    description: "Emergency near Food Court.",
    color: "border-green-500",
  },
  {
    title: "Transport Delay",
    description: "Metro delayed by 15 minutes.",
    color: "border-yellow-500",
  },
];

export default function MissionSimulator() {

  const {
    dashboardData,
    runScenario,
    resetDashboard,
    startDemo,
    demoRunning,
  } = useDashboard();
  const [selected, setSelected] = useState(scenarios[0]);

  return (

    <div>

      <h1 className="text-4xl font-bold mb-2 text-white">
        Mission Simulator
      </h1>

      <p className="text-slate-400 mb-8">
        Simulate stadium incidents and watch the AI respond.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        {scenarios.map((scenario) => (

          <Panel
            key={scenario.title}
            className={`cursor-pointer transition-all duration-300 border ${
              selected.title === scenario.title
                ? scenario.color
                : "border-slate-700"
            }`}
            onClick={() => setSelected(scenario)}
          >

            <h2 className="text-xl font-bold">
              {scenario.title}
            </h2>

            <p className="text-slate-400 mt-2">
              {scenario.description}
            </p>

          </Panel>

        ))}

      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={() => runScenario(selected.title)}
          className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-xl font-semibold transition"
        >
          ▶ Run Simulation
        </button>

        <button
          onClick={startDemo}
          disabled={demoRunning}
          className={`px-8 py-3 rounded-xl font-semibold transition ${
            demoRunning
              ? "bg-green-700 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-500"
          }`}
        >
          {demoRunning ? "● Demo Running..." : "▶ Start Live Demo"}
        </button>

        <button
          onClick={resetDashboard}
          className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-xl font-semibold transition"
        >
          Reset Dashboard
        </button>

      </div>

      <Panel className="mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Current Simulation
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <p className="text-slate-400">
              Scenario
            </p>

            <h3 className="text-xl font-bold">
              {dashboardData.scenario}
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Risk
            </p>

            <h3 className="text-red-400 text-xl font-bold">
              {dashboardData.risk}
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              AI Confidence
            </p>

            <h3 className="text-cyan-400 text-xl font-bold">
              {dashboardData.confidence}%
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Alert
            </p>

            <h3 className="font-semibold">
              {dashboardData.alert}
            </h3>

          </div>

        </div>

      </Panel>

    </div>

  );

}