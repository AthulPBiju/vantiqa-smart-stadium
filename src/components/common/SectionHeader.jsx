export default function SectionHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-slate-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}