export default function Button({

  children,

  onClick,

  variant = "primary",

  disabled = false,

  className = "",

}) {

  const styles = {

    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-500 text-white",

    success:
      "bg-green-600 hover:bg-green-500 text-white",

  };

  return (

    <button

      onClick={onClick}

      disabled={disabled}

      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${styles[variant]}
        ${className}
      `}

    >

      {children}

    </button>

  );

}