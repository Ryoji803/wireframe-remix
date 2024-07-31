import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { it, expect, describe, afterEach } from "vitest";
import DropdownMenu from "~/components/DropdownMenu";
import { useState } from "react";

afterEach(() => {
  cleanup();
});

describe("Test DropdownMenu", () => {
  it("Check if DropdownMenu renders selected option", () => {
    render(
      <DropdownMenu selectedOption="総人口" setSelectedOption={() => {}} />,
    );
    expect(screen.getByText("人口構成選択")).not.toBeNull();
    expect(screen.getByDisplayValue("総人口")).not.toBeNull();
  });

  it("Check if changing selection calls setSelectedOption function prop", () => {
    const TestComponent = () => {
      const [selectedOption, setSelectedOption] = useState("総人口");
      return (
        <DropdownMenu
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    };

    render(<TestComponent />);

    const selectElements = screen.getAllByDisplayValue("総人口");
    const selectElement = selectElements[0];

    fireEvent.change(selectElement, { target: { value: "年少人口" } });
    expect(screen.getByDisplayValue("年少人口")).not.toBeNull();
  });

  it("Check if DropdownMenu contains all options", () => {
    render(
      <DropdownMenu selectedOption="総人口" setSelectedOption={() => {}} />,
    );

    const options = ["総人口", "年少人口", "生産年齢人口", "老年人口"];
    options.forEach((option) => {
      expect(screen.getAllByText(option)[0]).not.toBeNull();
    });
  });
});
