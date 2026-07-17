export default function Badge({
  text,
  color = "green",
}) {

  const colors = {

    green:
      "bg-green-500/15 text-green-300 border border-green-500/30",

    yellow:
      "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",

    red:
      "bg-red-500/15 text-red-300 border border-red-500/30",

    blue:
      "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",

  };

  return (

    <span

      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-bold
        tracking-wide
        shadow-sm
        ${colors[color]}
      `}

    >

      {text}

    </span>

  );

}