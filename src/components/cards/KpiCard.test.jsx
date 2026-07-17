import { render, screen } from "@testing-library/react";
import KpiCard from "./KpiCard";

describe("KpiCard", () => {
  test("renders title", () => {
    render(
      <KpiCard
        title="Crowd Density"
        value="95%"
        icon={<span>📊</span>}
        color="bg-cyan-500"
      />
    );

    expect(screen.getByText("Crowd Density")).toBeInTheDocument();
  });

  test("renders value", () => {
    render(
      <KpiCard
        title="Crowd Density"
        value="95%"
        icon={<span>📊</span>}
        color="bg-cyan-500"
      />
    );

    expect(screen.getByText(/95/)).toBeInTheDocument();
  });
});