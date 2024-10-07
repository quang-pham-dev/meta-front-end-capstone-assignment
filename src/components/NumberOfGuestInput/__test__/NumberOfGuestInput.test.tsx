import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

import { NumberOfGuestsInput } from "../index";

describe("NumberOfGuestInput", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<NumberOfGuestsInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with default label", () => {
    render(<NumberOfGuestsInput />);
    expect(screen.getByText("Number of guests:")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<NumberOfGuestsInput label="Party Size" />);
    expect(screen.getByText("Party Size")).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    const { container } = render(
      <NumberOfGuestsInput
        labelClassName="custom-label"
        wrapperClassName="custom-wrapper"
        className="custom-input"
      />
    );
    expect(container.querySelector(".custom-label")).toBeInTheDocument();
    expect(container.querySelector(".custom-wrapper")).toBeInTheDocument();
    expect(container.querySelector(".custom-input")).toBeInTheDocument();
  });

  it("renders input with type number", () => {
    render(<NumberOfGuestsInput />);
    const numberInput = screen.getByRole("spinbutton");
    expect(numberInput).toHaveAttribute("type", "number");
  });

  it("forwards ref to input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<NumberOfGuestsInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
  it("passes additional props to input element", () => {
    render(<NumberOfGuestsInput data-testid="guest-input" />);
    const input = screen.getByTestId("guest-input");
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
  });

  it("calls onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<NumberOfGuestsInput onChange={handleChange} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays the correct value", () => {
    render(<NumberOfGuestsInput value={3} />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(3);
  });
});
