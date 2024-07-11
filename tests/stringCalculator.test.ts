import { describe, it, expect } from "@jest/globals";
import { add } from "./stringCalculator";

describe("add", () => {
  it("accepts an empty string and returns 0", () => {
    const expected = 0;
    const result = add("");
    expect(result).toEqual(expected);
  });
  it("accepts an string with a value of '1' and returns that as a number", () => {
    const expected = 1;
    const result = add("1");
    expect(result).toEqual(expected);
  });
  it("accepts other numeric values as a string and returns them as a number", () => {
    const expected = 2;
    const result = add("2");
    expect(result).toEqual(expected);
  });
  it("takes a pair of comma-separated numbers and returns their sum", () => {
    const expected = 2;
    const result = add("1,1");
    expect(result).toEqual(expected);
  });
  it("takes any number of comma-separated numbers and returns their sum", () => {
    const expected = 3;
    const result = add("1,1,1");
    expect(result).toEqual(expected);
  });
  it("takes a sequence of numbers separated by a newline and returns their sum", () => {
    const expected = 3;
    const result = add("1\n1\n1");
    expect(result).toEqual(expected);
  });
  it("takes a sequence of numbers separated either by a comma or a newline and returns their sum", () => {
    const expected = 3;
    const result = add("1\n1,1");
    expect(result).toEqual(expected);
  });
  it("takes a longer sequence of numbers separated either by a newline and returns their sum", () => {
    const expected = 5;
    const result = add("1\n1\n1\n1\n1");
    expect(result).toEqual(expected);
  });
  it("can take a specified delimiter of a comma, prefixed by // and followed by a newline and returns the sum of numbers ", () => {
    const expected = 2;
    const result = add("//,\n1,1");
    expect(result).toEqual(expected);
  });
  it("will default to returning if no numbers are specified after the delimiter", () => {
    const expected = 0;
    const result = add("//,\n");
    expect(result).toEqual(expected);
  });
  it("will return the sum of numbers if the delimiter is a character other than a comma", () => {
    const expected = 3;
    const result = add("//;\n1;2");
    expect(result).toEqual(expected);
  });
  it("throws error for negative inputs", () => {
    expect(() => add("3,-1")).toThrow(/Negatives not allowed!/);
  });
  it("includes any negative values in the error's message", () => {
    expect(() => add("3,-1")).toThrow(/-1/);
  });
  it("ignores numbers bigger than 1000", () => {
    const input = "1000,1,1,1000";
    const expected = 2;
    const result = add(input);
    expect(result).toEqual(expected);
  });
});
