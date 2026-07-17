export default function Panel({
  children,
  className = "",
  onClick,
}) {

  return (

    <div
      onClick={onClick}
      className={`
        rounded-2xl
        border
        border-slate-700

        bg-gradient-to-br
        from-[#101826]/90
        to-[#0B1220]/80

        backdrop-blur-xl
        transform-gpu

        p-6

        shadow-lg

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-cyan-500/40
        hover:shadow-lg
        hover:shadow-cyan-500/20

        ${onClick ? "cursor-pointer" : ""}

        ${className}
      `}
    >

      {children}

    </div>

  );

}