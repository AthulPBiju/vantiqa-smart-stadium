import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import MissionControl from "./pages/MissionControl/MissionControl";
import VenueExplorer from "./pages/VenueExplorer/VenueExplorer";
import MissionSimulator from "./pages/MissionSimulator/MissionSimulator";
import Communications from "./pages/Communications/Communications";
import Reports from "./pages/Reports/Reports";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<AppLayout />}>

          <Route
            path="/"
            element={<MissionControl />}
          />

          <Route
            path="/venue"
            element={<VenueExplorer />}
          />

          <Route
            path="/simulator"
            element={<MissionSimulator />}
          />

          <Route
            path="/communications"
            element={<Communications />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;