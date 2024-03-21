import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./Error-Page";

// ErrorPage Component
describe("Error Page", () => {
  it("renders default error state", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeTruthy();
    screen.debug();
  });
  it("redirects user back to the app", () => {
    const originalBack = window.history.back;
    window.history.back = vi.fn();

    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    // Assert that window.history.back() was called
    expect(window.history.back).toHaveBeenCalledTimes(1);
    // Restore original window.history.back()
    window.history.back = originalBack;
  });
});

