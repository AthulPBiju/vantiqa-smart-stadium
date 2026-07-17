import { createContext, useContext, useState } from "react";

const DemoContext = createContext();

export function DemoProvider({ children }) {

  const [demoRunning, setDemoRunning] = useState(false);

  const startDemo = () => {

    if (demoRunning) return;

    setDemoRunning(true);

  };

  const stopDemo = () => {

    setDemoRunning(false);

  };

  return (

    <DemoContext.Provider
      value={{
        demoRunning,
        startDemo,
        stopDemo,
      }}
    >

      {children}

    </DemoContext.Provider>

  );

}

export function useDemo() {

  return useContext(DemoContext);

}