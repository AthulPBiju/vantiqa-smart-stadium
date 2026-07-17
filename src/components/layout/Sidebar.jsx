import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Cpu,
  Megaphone,
  FileText,
} from "lucide-react";

const menuItems = [
  {
    name: "Mission Control",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Venue Explorer",
    path: "/venue",
    icon: Map,
  },
  {
    name: "Mission Simulator",
    path: "/simulator",
    icon: Cpu,
  },
  {
    name: "Communications",
    path: "/communications",
    icon: Megaphone,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#101826] border-r border-[#1D2A3B] flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-[#1D2A3B]">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          VANTIQA
        </h1>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main Navigation"
        className="flex-1 px-4 py-6 space-y-2"
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              aria-label={item.name}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#1D2A3B] p-5">
        <p className="text-xs text-slate-500">
          VANTIQA v1.0
        </p>
      </div>
    </aside>
  );
}