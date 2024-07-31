import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { it, expect, describe, afterEach } from "vitest";
import Checkbox from "~/components/Checkbox";

afterEach(() => {
  cleanup();
});

describe("Test Checkbox", () => {
  it("Check if Checkbox renders prefecture name", async () => {
    render(
      <Checkbox
        addPopulation={() => {}}
        removePopulation={() => {}}
        prefecture={{
          code: 1,
          name: "北海道",
        }}
      />,
    );
    expect(() => screen.getByText("北海道")).not.toThrowError();
    expect(() => screen.getByText("北s海s道")).toThrowError();
  });

  it("Check if selecting Checkbox executes addPopulation function prop", () => {
    let isClicked = false;
    render(
      <Checkbox
        addPopulation={() => {
          isClicked = true;
        }}
        removePopulation={() => {}}
        prefecture={{
          code: 1,
          name: "北海道",
        }}
      />,
    );
    fireEvent.click(screen.getByText("北海道"));
    expect(isClicked).toBeTruthy();
  });

  it("Check if deselecting Checkbox executes addPopulation function prop", () => {
    let isClicked = false;
    render(
      <Checkbox
        addPopulation={() => {}}
        removePopulation={() => {
          isClicked = true;
        }}
        prefecture={{
          code: 1,
          name: "北海道",
        }}
      />,
    );
    fireEvent.click(screen.getByText("北海道"));
    fireEvent.click(screen.getByText("北海道"));
    expect(isClicked).toBeTruthy();
  });
});
