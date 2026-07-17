import Panel from "../ui/Panel";

export default function ReportSummary() {

  return (

    <Panel>

      <h2 className="text-2xl font-bold mb-6">
        Executive Summary
      </h2>

      <div className="space-y-4">

        <p>
          Total Attendance:
          <span className="font-bold text-cyan-400 ml-2">
            52,431
          </span>
        </p>

        <p>
          AI Decisions Executed:
          <span className="font-bold text-green-400 ml-2">
            12
          </span>
        </p>

        <p>
          Average Response Time:
          <span className="font-bold text-yellow-400 ml-2">
            2.8 min
          </span>
        </p>

        <p>
          Crowd Diversions:
          <span className="font-bold text-cyan-400 ml-2">
            18
          </span>
        </p>

        <p>
          Overall Operational Score:
          <span className="font-bold text-green-400 ml-2">
            96%
          </span>
        </p>

      </div>

    </Panel>

  );

}