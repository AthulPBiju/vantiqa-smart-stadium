import { Play } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function DemoButton() {

  const { startDemo, demoRunning } = useDashboard();

  return (

    <button
      onClick={startDemo}
      disabled={demoRunning}
      aria-label="Start Demo"
      title="Start Demo"
      className={`
        fixed
        bottom-8
        right-8
        z-50
        flex
        items-center
        gap-3
        rounded-full
        px-6
        py-4
        shadow-xl
        transition-all
        duration-300
        ${
          demoRunning
            ? "bg-green-600 cursor-not-allowed"
            : "bg-cyan-600 hover:bg-cyan-500 hover:scale-105"
        }
      `}
    >
      <Play size={20} />

      {demoRunning
        ? "Demo Running"
        : "Start Live Demo"}

    </button>

  );

}