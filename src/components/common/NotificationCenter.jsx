import { useNotification } from "../../context/NotificationContext";

export default function NotificationCenter() {

  const { notifications } = useNotification();

  return (

    <div className="fixed top-6 right-6 z-50 space-y-4">

      {notifications.map((item) => (

        <div
          key={item.id}
          className="w-80 rounded-xl border border-cyan-500 bg-slate-900 p-4 shadow-xl animate-bounce"
        >

          <h3 className="font-bold text-cyan-400">
            {item.title}
          </h3>

          <p className="mt-2 text-slate-300">
            {item.message}
          </p>

        </div>

      ))}

    </div>

  );

}