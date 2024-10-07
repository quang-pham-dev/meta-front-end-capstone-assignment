import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { ChooseDateInput } from "../index";

describe("ChooseDateInput", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ChooseDateInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with default label", () => {
    render(<ChooseDateInput />);
    expect(screen.getByText("Choose Date:")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<ChooseDateInput label="Select Date" />);
    expect(screen.getByText("Select Date")).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    const { container } = render(
      <ChooseDateInput
        labelClassName="custom-label"
        wrapperClassName="custom-wrapper"
        className="custom-input"
      />
    );
    expect(container.querySelector(".custom-label")).toBeInTheDocument();
    expect(container.querySelector(".custom-wrapper")).toBeInTheDocument();
    expect(container.querySelector(".custom-input")).toBeInTheDocument();
  });

  it("renders input with type date", () => {
    render(<ChooseDateInput />);
    const dateInput = screen.getByDisplayValue('');
    expect(dateInput).toHaveAttribute("type", "date");
  });

  it("forwards ref to input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<ChooseDateInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("passes additional props to input element", () => {
    render(
      <ChooseDateInput
        data-testid="date-input"
        min="2023-01-01"
        max="2023-12-31"
      />
    );
    const input = screen.getByTestId("date-input");
    expect(input).toHaveAttribute("min", "2023-01-01");
    expect(input).toHaveAttribute("max", "2023-12-31");
  });
});
