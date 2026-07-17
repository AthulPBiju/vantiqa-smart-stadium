export default function AnimatedBackground() {

  return (

    <>

      <div className="fixed inset-0 -z-20 bg-[#070B14]" />

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px] animate-pulse" />

        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 rounded-full bg-green-500/5 blur-[140px] animate-pulse"
          style={{
            transform: "translate(-50%,-50%)",
          }}
        />

      </div>

    </>

  );

}