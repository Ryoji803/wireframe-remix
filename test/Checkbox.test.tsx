// import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Checkbox from "~/components/Checkbox";

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
          code: 2,
          name: "青森県",
        }}
      />,
    );
    fireEvent.click(screen.getByText("青森県"));
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
          code: 3,
          name: "岩手県",
        }}
      />,
    );
    fireEvent.click(screen.getByText("岩手県"));
    fireEvent.click(screen.getByText("岩手県"));
    expect(isClicked).toBeTruthy();
  });
});
