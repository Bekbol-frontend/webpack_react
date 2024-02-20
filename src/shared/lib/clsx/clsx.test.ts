import { describe, expect, test } from "@jest/globals";
import { clsx } from ".";

describe("sum module", () => {
  test("clsx class", () => {
    expect(clsx(["item"])).toBe("item");
  });
  test("clsx mods all true values", () => {
    expect(clsx(["item"], { active: true, show: true })).toBe(
      "item active show"
    );
  });
  test("clsx mods one false values hide", () => {
    expect(clsx(["item"], { active: true, show: true, hide: false })).toBe(
      "item active show"
    );
  });
});
