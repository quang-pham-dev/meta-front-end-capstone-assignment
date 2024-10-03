import { describe, it, expect } from "vitest";
import { fetchAPI, submitAPI } from "../booking";

describe("Booking Service", () => {
  describe("fetchAPI", () => {
    it("returns an array of available times", () => {
      const date = new Date("2023-05-01");
      const result = fetchAPI(date);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      result.forEach((time) => {
        expect(typeof time).toBe("string");
        expect(time).toMatch(/^\d{2}:\d{2}$/);
      });
    });
  });

  describe("submitAPI", () => {
    it("returns true for a valid form submission", () => {
      const formData = new FormData();
      formData.append("date", "2023-05-01");
      formData.append("time", "18:00");
      formData.append("guests", "4");
      formData.append("occasion", "Birthday");

      const result = submitAPI(formData);

      expect(result).toBe(true);
    });
  });
});
