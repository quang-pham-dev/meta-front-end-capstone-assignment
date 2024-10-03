import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

import { Dropdown, DropdownProps } from "../Dropdown";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];

const renderDropdown = (props: Partial<DropdownProps> = {}) => {
  const defaultProps: DropdownProps = {
    options: mockOptions,
    id: "test-dropdown"
  };
  return render(<Dropdown {...defaultProps} {...props} />);
};

describe("Dropdown", () => {
  it("renders with default props", () => {
    renderDropdown();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("booking-form-input");
    expect(screen.getAllByRole("option")).toHaveLength(4); // Including the default "Select an option"
  });

  it("renders with a label when provided", () => {
    renderDropdown({ label: "Test Label" });
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("booking-form-label");
  });

  it("applies custom class names", () => {
    renderDropdown({
      wrapperClassName: "custom-wrapper",
      labelClassName: "custom-label",
      className: "custom-select",
      label: "Custom Label"
    });

    const wrapper = screen.getByRole("combobox").closest(".booking-form-field");
    expect(wrapper).toHaveClass("booking-form-field custom-wrapper");

    const label = screen.getByText("Custom Label");
    expect(label).toHaveClass("booking-form-label custom-label");

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("booking-form-input custom-select");
  });

  it("renders all options", () => {
    renderDropdown();
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveTextContent("Select an option");
    expect(options[1]).toHaveTextContent("Option 1");
    expect(options[2]).toHaveTextContent("Option 2");
    expect(options[3]).toHaveTextContent("Option 3");
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = vi.fn();
    renderDropdown({ onChange: handleChange });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "option2" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue("option2");
  });

  it("forwards the ref to the select element", () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Dropdown options={mockOptions} id="test-dropdown" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    expect(ref.current).toHaveAttribute("id", "test-dropdown");
  });

  it("applies additional props to the select element", () => {
    renderDropdown({
      "data-testid": "custom-testid",
      required: true
    } as React.SelectHTMLAttributes<HTMLSelectElement>);

    const select = screen.getByTestId("custom-testid");
    expect(select).toBeInTheDocument();
    expect(select).toBeRequired();
  });

  it("matches snapshot", () => {
    const { asFragment } = renderDropdown({ label: "Snapshot Test" });
    expect(asFragment()).toMatchSnapshot();
  });
});
