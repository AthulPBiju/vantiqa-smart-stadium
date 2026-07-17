import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import OperationsPulse from "./OperationsPulse";

const mockDashboard = {
  dashboardData: {
    aiApproved: false,
    risk: "HIGH",
    confidence: 96,
    scenario: "Crowd Surge",
    alert: "Heavy pedestrian movement detected near East Gate.",
  },
};

vi.mock("../../context/DashboardContext", () => ({
  useDashboard: () => mockDashboard,
}));

describe("OperationsPulse", () => {
  it("renders title", () => {
    render(<OperationsPulse />);

    expect(
      screen.getByText("Operations Pulse")
    ).toBeInTheDocument();
  });

  it("shows HIGH risk before AI approval", () => {
    mockDashboard.dashboardData = {
      aiApproved: false,
      risk: "HIGH",
      confidence: 96,
      scenario: "Crowd Surge",
      alert: "Heavy pedestrian movement detected near East Gate.",
    };

    render(<OperationsPulse />);

    expect(screen.getByText("HIGH")).toBeInTheDocument();
  });

  it("shows LOW risk after AI approval", () => {
    mockDashboard.dashboardData = {
      aiApproved: true,
      risk: "LOW",
      confidence: 99,
      scenario: "Crowd Surge",
      alert: "Crowd diversion completed successfully.",
    };

    render(<OperationsPulse />);

    expect(screen.getByText("LOW")).toBeInTheDocument();
  });
});