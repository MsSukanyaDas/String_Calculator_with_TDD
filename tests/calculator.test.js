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
  it("handles new lines", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("supports different delimiter ;", () => {
    expect(add("//;\n1;2;8;9")).toBe(20);
  });
  it("supports different delimiter -", () => {
    expect(add("//-\n1-2-8-9")).toBe(20);
  });
  it("throws error & prints them for negative numbers", () => {
    expect(() => add("-5,2,-3,10")).toThrow(
      "negative numbers not allowed -5,-3,"
    );
  });
  it("throws invalid input error with extra delimiter", () => {
    expect(() => add("//-\n1-2-8--9-")).toThrow("Invalid Input");
  });
  it("throws invalid input error with extra line break", () => {
    expect(() => add("1,\n")).toThrow("Invalid Input");
  });
});
