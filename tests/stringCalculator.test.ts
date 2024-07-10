import { describe, test, expect } from "@jest/globals"

export function add (input: string) {
    let delimiter = ',';
    if (input.substring(0, 2) === "//") {
        delimiter = input.substring(2, 3);
    }
    const numberString = input.replace(`//${delimiter}\n`, "");
    
    if (!numberString.length) {
        return 0;
    }
    
    const numbers = numberString
        .split("\n")
        .join(delimiter)
        .split(delimiter);

    return numbers.reduce((total, x) => total + parseInt(x), 0)
}

describe("add", () => {
    test("an empty string returns 0", () => {
        const expected = 0;
        const result = add("");
        expect(result).toEqual(expected)
    })
    test("'1' returns 1", () => {
        const expected = 1;
        const result = add("1");
        expect(result).toEqual(expected)
    })
    test("'2' returns 2", () => {
        const expected = 2;
        const result = add("2");
        expect(result).toEqual(expected)
    })
    test("'-1' returns -1", () => {
        const expected = -1;
        const result = add("-1");
        expect(result).toEqual(expected)
    })
    test("'1,1' returns 2", () => {
        const expected = 2;
        const result = add("1,1");
        expect(result).toEqual(expected)
    })
    test("'1,1,1' returns 3", () => {
        const expected = 3;
        const result = add("1,1,1");
        expect(result).toEqual(expected)
    })
    test("'1\n1,1' returns 3", () => {
        const expected = 3;
        const result = add("1\n1,1");
        expect(result).toEqual(expected)
    })
    test("'1\n1\n1' returns 3", () => {
        const expected = 3;
        const result = add("1\n1\n1");
        expect(result).toEqual(expected)
    })
    test("'1\n1\n1\n1\n1' returns 5", () => {
        const expected = 5;
        const result = add("1\n1\n1\n1\n1");
        expect(result).toEqual(expected)
    })
    test("'//,\n1,1' returns 2", () => {
        const expected = 2;
        const result = add("//,\n1,1");
        expect(result).toEqual(expected)
    })
    test("'//,\n' returns 0", () => {
        const expected = 0;
        const result = add("//,\n");
        expect(result).toEqual(expected)
    })
    test("'//;\n1;2' returns 3", () => {
        const expected = 3;
        const result = add("//;\n1;2");
        expect(result).toEqual(expected)
    })
})
