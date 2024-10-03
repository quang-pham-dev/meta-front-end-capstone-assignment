import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "../Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button button--default button--medium");
  });

  it("renders with custom variant and size", () => {
    render(
      <Button variant="primary" size="large">
        Custom Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toHaveClass("button button--primary button--large");
  });

  it("passes additional props to the button element", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Snapshot Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
