import { useEffect, useState } from "react";
import Panel from "../ui/Panel";

export default function KpiCard({
  title,
  value,
  icon,
  color,
}) {

  const numericValue =
    parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;

  const suffix =
    String(value).includes("%")
      ? "%"
      : String(value).includes("min")
      ? " min"
      : "";

  const [displayValue, setDisplayValue] =
    useState(numericValue);

  const [flash, setFlash] =
    useState(false);

  useEffect(() => {

    const start = displayValue;
    const end = numericValue;

    const duration = 800;
    const steps = 30;

    let currentStep = 0;

    const timer = setInterval(() => {

      currentStep++;

      const progress = currentStep / steps;

      const current =
        start + (end - start) * progress;

      setDisplayValue(current);

      if (currentStep >= steps) {

        clearInterval(timer);

        setDisplayValue(end);

      }

    }, duration / steps);

    return () => clearInterval(timer);

  }, [numericValue]);

  useEffect(() => {

    setFlash(true);

    const timer = setTimeout(() => {

      setFlash(false);

    }, 600);

    return () => clearTimeout(timer);

  }, [numericValue]);

  return (

    <Panel
      className={`
        transition-all
        duration-700
        hover:scale-105
        hover:shadow-cyan-500/20

        ${
          flash
            ? "ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/30"
            : ""
        }
      `}
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">

            {Math.round(displayValue)}
            {suffix}

          </h2>

        </div>

        <div
          className={`
            h-14
            w-14
            rounded-xl
            flex
            items-center
            justify-center
            ${color}
            transition-all
            duration-700
            hover:scale-110
            hover:rotate-6
          `}
        >

          {icon}

        </div>

      </div>

    </Panel>

  );

}