import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Link } from "../Link";
import "@testing-library/jest-dom";

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("Link", () => {
  it("renders with default props", () => {
    renderWithRouter(<Link to="/">Home</Link>);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders with custom className", () => {
    renderWithRouter(
      <Link to="/about" className="custom-link">
        About
      </Link>
    );
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveClass("custom-link");
  });

  it("passes additional props to the link element", () => {
    renderWithRouter(
      <Link to="/contact" target="_blank">
        Contact
      </Link>
    );
    const link = screen.getByRole("link", { name: /contact/i });
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("matches snapshot", () => {
    const { asFragment } = renderWithRouter(
      <Link to="/products">Products</Link>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
