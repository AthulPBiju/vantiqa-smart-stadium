import { DemoProvider } from "./context/DemoContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { DashboardProvider } from "./context/DashboardContext";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardProvider>

      <DemoProvider>

          <App />

      </DemoProvider>

</DashboardProvider>
  </StrictMode>
);