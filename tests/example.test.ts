import { example } from "../src/example"
import { describe, test, expect } from "@jest/globals"

describe('Sum function', () =>{
    test('Returns correct value', () =>{
        expect(example(2, 3)).toEqual(5)
    })
})