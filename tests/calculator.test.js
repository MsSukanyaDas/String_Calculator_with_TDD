add = require("../src/calculator");

describe("Add function", () => {
  it("returns 0 when empty string", () => {
    expect(add("")).toBe(0);
  });
  it("returns number when input is one number", () => {
    expect(add("8")).toBe(8);
  });
  it("returns sum when input more than one number", () => {
    expect(add("8,2")).toBe(10);
  });
  it("returns sum when input 5 numbers", () => {
    expect(add("8,2,5,7,0")).toBe(22);
  });
  it.todo("handles new lines");
  it.todo("supports different delimiters");
  it.todo("throws error for negative number");
});
