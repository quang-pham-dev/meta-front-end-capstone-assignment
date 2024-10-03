import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BookingForm from "../BookingForm";
import "@testing-library/jest-dom";

describe("BookingForm", () => {
  it("matches snapshot", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockOnSubmit = vi.fn();

    const { asFragment } = render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockOnSubmit = vi.fn();

    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  it("submits the form with correct data", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockOnSubmit = vi.fn();

    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-05-01" }
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(mockOnSubmit).toHaveBeenCalledWith(expect.any(FormData));
  });
});
