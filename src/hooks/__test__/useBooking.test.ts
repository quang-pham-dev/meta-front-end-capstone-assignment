import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useBooking } from "../useBooking";
import { fetchAPI, submitAPI } from "@/services";
import { ROUTES } from "@/constants";
import { useNavigate } from "react-router-dom";

vi.mock("@/services", () => ({
  fetchAPI: vi.fn(),
  submitAPI: vi.fn()
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn()
}));

describe("useBooking", () => {
  const mockNavigate = vi.fn();
  const mockFetchAPI = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockFetchAPI.mockResolvedValue(["18:00", "19:00", "20:00"]);
    vi.mocked(fetchAPI).mockImplementation(mockFetchAPI);
    vi.mocked(submitAPI).mockResolvedValue(true);
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("initializes with fetched available times", async () => {
    const { result } = renderHook(() => useBooking());

    // Wait for the fetchAPI to be called
    await waitFor(() => {
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });

    // Wait for the state to be updated
    await waitFor(() => {
      expect(result.current.availableTimes).toEqual([
        "18:00",
        "19:00",
        "20:00"
      ]);
    });
  });

  it("calls submitAPI and navigates on successful form submission", () => {
    const { result } = renderHook(() => useBooking());
    const formData = new FormData();

    act(() => {
      result.current.onSubmit(formData);
    });

    expect(submitAPI).toHaveBeenCalledWith(formData);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.BOOKING_CONFIRMED);
  });

  it("does not navigate if submitAPI returns false", () => {
    vi.mocked(submitAPI).mockReturnValueOnce(false);
    const { result } = renderHook(() => useBooking());
    const formData = new FormData();

    act(() => {
      result.current.onSubmit(formData);
    });

    expect(submitAPI).toHaveBeenCalledWith(formData);
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
