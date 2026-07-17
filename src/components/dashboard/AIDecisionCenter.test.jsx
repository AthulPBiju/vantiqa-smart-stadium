import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AIDecisionCenter from "./AIDecisionCenter";

vi.mock("../../context/DashboardContext", () => ({
  useDashboard: () => ({
    dashboardData: {
      confidence: 96,
      aiApproved: false,
    },
    approveDecision: vi.fn(),
    aiProgress: 0,
    demoStep: 0,
  }),
}));

describe("AIDecisionCenter", () => {
  it("renders the title", () => {
    render(<AIDecisionCenter />);

    expect(
      screen.getByText("AI Decision Center")
    ).toBeInTheDocument();
  });

  it("shows AI confidence", () => {
    render(<AIDecisionCenter />);

    expect(
      screen.getByText("96%")
    ).toBeInTheDocument();
  });

  it("shows approve button", () => {
    render(<AIDecisionCenter />);

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });
});