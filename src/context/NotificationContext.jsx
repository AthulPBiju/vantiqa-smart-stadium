import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {

  const [notifications, setNotifications] = useState([]);

  function notify(title, message, color = "cyan") {

    const id = Date.now();

    const item = {
      id,
      title,
      message,
      color,
    };

    setNotifications((prev) => [...prev, item]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== id)
      );
    }, 4000);
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        notify,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}