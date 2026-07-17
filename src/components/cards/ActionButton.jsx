export default function ActionButton({
  children,
}) {
  return (
    <button
      className="
      w-full
      rounded-xl
      bg-cyan-500
      py-3
      font-semibold
      text-black
      transition
      hover:bg-cyan-400
      "
    >
      {children}
    </button>
  );
}