import { smash } from "./stringsmash";

describe("smash", () => {
  test("Should return empty string for empty array.", () => {
    expect(smash([])).toBe("");
  });

  test("One word example should return the word.", () => {
    expect(smash(["hello"])).toBe("hello");
  });

  test("Multiple words should be separated by spaces.", () => {
    expect(smash(["hello", "world"])).toBe("hello world");
    expect(smash(["hello", "amazing", "world"])).toBe("hello amazing world");
    expect(smash(["this", "is", "a", "really", "long", "sentence"])).toBe("this is a really long sentence");
  });
});