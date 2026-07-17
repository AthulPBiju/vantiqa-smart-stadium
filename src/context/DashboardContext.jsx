import {
  createContext,
  useContext,
  useState,
} from "react";

import toast from "react-hot-toast";

const DashboardContext = createContext();

const initialData = {
  crowdDensity: 95,
  missionStatus: 94,
  transportDelay: 4,
  energyEfficiency: 94,
  eastGate: 94,
  aiApproved: false,

  scenario: "Normal",

  alert:
    "Heavy pedestrian movement detected near East Gate.",

  risk: "HIGH",

  confidence: 96,
};

export function DashboardProvider({ children }) {

  const [dashboardData, setDashboardData] =
    useState(initialData);

  const [demoRunning, setDemoRunning] =
    useState(false);

  const [demoStep, setDemoStep] =
    useState(0);

  const [aiProgress, setAiProgress] =
    useState(0);

  const [timeline, setTimeline] =
    useState([
      {
        time: new Date().toLocaleTimeString(),
        message: "System Ready",
        type: "success",
      },
    ]);

  function addTimeline(message, type = "info") {

    if (type === "danger") {

      toast.error(message);

    } else if (type === "success") {

      toast.success(message);

    } else {

      toast(message);

    }

    setTimeline(prev => {

      const updated = [

        {
          time: new Date().toLocaleTimeString(),
          message,
          type,
        },

        ...prev,

      ];

      return updated.slice(0, 10);

    });

  }

  function startDemo() {

    if (demoRunning) return;

    setDemoRunning(true);
    setDemoStep(1);

    runScenario("Crowd Surge");

    setAiProgress(0);

    addTimeline(
      "🚨 Crowd Surge Detected at East Gate",
      "danger"
    );

    // Stage 1
    setTimeout(() => {

      setDemoStep(2);

      addTimeline(
        "🤖 AI analysing crowd behaviour..."
      );

      let progress = 0;

      const aiTimer = setInterval(() => {

        progress += 5;

        setAiProgress(progress);

        if (progress >= 100) {

          clearInterval(aiTimer);

        }

      }, 150);

    }, 5000);

    // Stage 2
    setTimeout(() => {

      setDemoStep(3);

      addTimeline(
        "AI Recommendation Approved",
        "success"
      );

      animateMitigation();

    }, 10000);

    // Stage 3
    setTimeout(() => {

      setDemoStep(4);

      addTimeline(
        "✅ Congestion Successfully Reduced",
        "success"
      );

    }, 15000);

    // Stage 4
    setTimeout(() => {

      setDemoStep(5);

      addTimeline(
        "Mission Completed",
        "success"
      );

    }, 20000);

    setTimeout(() => {

      resetDashboard();

      setAiProgress(0);

      setDemoRunning(false);

      setDemoStep(0);

    }, 25000);

  }

  function approveDecision() {

    setDashboardData(prev => ({
      ...prev,

      crowdDensity: 68,
      missionStatus: 98,
      transportDelay: 2,
      energyEfficiency: 97,
      eastGate: 63,
      aiApproved: true,

      alert:
        "Crowd diversion completed successfully.",

      risk: "LOW",
    }));

  }

  function animateMitigation() {

    let crowd = 98;
    let mission = 82;
    let delay = 9;
    let energy = 91;
    let gate = 97;

    const timer = setInterval(() => {

      crowd -= 3;
      mission += 2;
      delay -= 1;
      energy += 1;
      gate -= 3;

      setDashboardData(prev => ({

        ...prev,

        crowdDensity: Math.max(crowd,68),

        missionStatus: Math.min(mission,98),

        transportDelay: Math.max(delay,2),

        energyEfficiency: Math.min(energy,97),

        eastGate: Math.max(gate,63),

      }));

      if (crowd <= 68) {

        clearInterval(timer);

        approveDecision();

      }

    },400);

  }

  function resetDashboard() {

    setDashboardData(initialData);

    setTimeline([
      {
        time: new Date().toLocaleTimeString(),
        message: "System Ready",
        type: "success",
      },
    ]);

  }

  function runScenario(type) {

    setAiProgress(0);

    setDashboardData(prev => ({
      ...prev,
      aiApproved: false,
    }));

    if (type === "Crowd Surge") {

      setDashboardData({
        crowdDensity: 98,
        missionStatus: 82,
        transportDelay: 9,
        energyEfficiency: 91,
        eastGate: 97,
        aiApproved: false,

        scenario: type,

        alert:
          "Mass crowd movement detected near East Gate.",

        risk: "HIGH",

        confidence: 98,
      });

    }

    if (type === "Rain") {

      setDashboardData({
        crowdDensity: 74,
        missionStatus: 88,
        transportDelay: 11,
        energyEfficiency: 89,
        eastGate: 72,
        aiApproved: false,

        scenario: type,

        alert:
          "Rain forecast received. Slippery walkways expected.",

        risk: "MEDIUM",

        confidence: 95,
      });

    }

    if (type === "Medical Emergency") {

      setDashboardData({
        crowdDensity: 67,
        missionStatus: 79,
        transportDelay: 3,
        energyEfficiency: 96,
        eastGate: 65,
        aiApproved: false,

        scenario: type,

        alert:
          "Medical emergency reported near Food Court.",

        risk: "HIGH",

        confidence: 99,
      });

    }

    if (type === "Transport Delay") {

      setDashboardData({
        crowdDensity: 81,
        missionStatus: 90,
        transportDelay: 16,
        energyEfficiency: 92,
        eastGate: 82,
        aiApproved: false,

        scenario: type,

        alert:
          "Metro arrival delayed by 15 minutes.",

        risk: "MEDIUM",

        confidence: 94,
      });

    }

  }

  return (

    <DashboardContext.Provider

      value={{
        dashboardData,
        approveDecision,
        resetDashboard,
        runScenario,
        demoRunning,
        startDemo,
        timeline,
        addTimeline,
        demoStep,
        setDemoStep,
        aiProgress,
      }}

    >

      {children}

    </DashboardContext.Provider>

  );

}

export function useDashboard() {

  return useContext(DashboardContext);

}