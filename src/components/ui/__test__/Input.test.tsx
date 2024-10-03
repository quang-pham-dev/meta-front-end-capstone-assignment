import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "../Input";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders with custom type and className", () => {
    render(<Input type="number" className="custom-input" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveClass("custom-input");
  });

  it("passes additional props to the input element", () => {
    render(<Input placeholder="Enter text" required />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveAttribute("required");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Input type="email" placeholder="Enter email" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
