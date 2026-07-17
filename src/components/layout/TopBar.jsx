import { useEffect, useState } from "react";
import {
  Bell,
  CircleUserRound,
  ShieldCheck,
  SatelliteDish,
} from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function TopBar() {

  const {
    demoRunning,
    dashboardData,
  } = useDashboard();

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(
        new Date().toLocaleTimeString()
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <header className="h-24 border-b border-slate-700 bg-[#101826] px-8 flex items-center justify-between shadow-lg">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">

          <SatelliteDish
            size={28}
            className="text-cyan-400"
          />

        </div>

        <div>

          <h1 className="text-2xl font-bold tracking-wide">

            VANTIQA Command Center

          </h1>

          <p className="text-sm text-slate-400">

            FIFA World Cup 2026 • Smart Stadium AI Platform

          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-8">

        {/* Clock */}

        <div className="text-right">

          <p className="text-xs text-slate-500">

            LIVE CLOCK

          </p>

          <p className="font-mono text-xl font-bold text-cyan-300">

            {currentTime}

          </p>

        </div>

        {/* System Status */}

        <div className="text-center">

          <p className="text-xs text-slate-500">

            SYSTEM HEALTH

          </p>

          <p
            className={`font-bold ${
              dashboardData.missionStatus >= 95
                ? "text-green-400"
                : dashboardData.missionStatus >= 85
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >

            {dashboardData.missionStatus}%

          </p>

        </div>

        {/* Live Badge */}

        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition-all duration-500 ${
            demoRunning
              ? "bg-yellow-500/20 text-yellow-300"
              : "bg-green-500/20 text-green-300"
          }`}
        >

          <span
            className={`h-3 w-3 rounded-full animate-pulse ${
              demoRunning
                ? "bg-yellow-400"
                : "bg-green-400"
            }`}
          />

          {demoRunning

            ? "SIMULATION"

            : "LIVE"}

        </div>

        {/* Secure */}

        <div className="flex items-center gap-2 text-green-300">

          <ShieldCheck size={20} />

          <span className="text-sm">

            Secure

          </span>

        </div>

        {/* Notification */}

        <Bell
          size={22}
          className="cursor-pointer transition hover:rotate-12 hover:text-cyan-400"
        />

        {/* User */}

        <div className="flex items-center gap-3">

          <CircleUserRound
            size={36}
            className="text-cyan-400"
          />

          <div>

            <p className="font-semibold">

              Admin

            </p>

            <p className="text-xs text-slate-400">

              Operations Center

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}