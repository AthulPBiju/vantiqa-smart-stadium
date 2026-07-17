import { render, screen, fireEvent } from "@testing-library/react";
import Panel from "./Panel";
import { describe, it, expect, vi } from "vitest";

describe("Panel", () => {
  it("renders children", () => {
    render(
      <Panel>
        <p>Hello Panel</p>
      </Panel>
    );

    expect(screen.getByText("Hello Panel")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Panel className="custom-class">
        Test
      </Panel>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("calls onClick", () => {
    const handleClick = vi.fn();

    render(
      <Panel onClick={handleClick}>
        Click Me
      </Panel>
    );

    fireEvent.click(screen.getByText("Click Me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});