import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Test button", () => {
  test("BUTTON", () => {
    render(<Button>CLICK</Button>);

    expect(screen.getByText("CLICK"))
  });
});
