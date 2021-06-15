import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./index";

describe("Home component", () => {
  it("must be able to search images", () => {
    const { getByPlaceholderText, getByTestId, getByAltText } = render(
      <Home />
    );

    fireEvent.change(getByPlaceholderText("Search image"), {
      target: { value: "cats" },
    });
    fireEvent.submit(getByTestId("search-form"));

    expect(getByTestId("image-list")).toContainElement(getByAltText("cat"));
  });
});
