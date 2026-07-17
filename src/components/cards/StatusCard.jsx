export default function StatusCard({
  title,
  value,
  status,
  color = "bg-green-500",
}) {
  return (
    <div className="rounded-2xl border border-[#1D2A3B] bg-[#101826] p-6 shadow-lg">

      <div className="flex items-center justify-between">

        <h3 className="text-slate-400 text-sm uppercase tracking-wide">
          {title}
        </h3>

        <div
          className={`h-3 w-3 rounded-full ${color}`}
        />
      </div>

      <div className="mt-5">

        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        <p className="mt-2 text-green-400 font-medium">
          {status}
        </p>

      </div>

    </div>
  );
}