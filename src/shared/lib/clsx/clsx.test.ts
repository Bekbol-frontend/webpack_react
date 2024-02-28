import { clsx } from "@/shared/lib/clsx";

describe("test", () => {
  test("test clsx array", () => {
    expect(clsx(["some"])).toBe("some");
  });

  test("test clsx mods all true value", () => {
    expect(clsx(["some"], { active: true, show: true })).toBe(
      "some active show"
    );
  });

  test("test clsx mods all false value", () => {
    expect(clsx(["some"], { active: true, show: true, hide: false })).toBe(
      "some active show"
    );
  });
});
