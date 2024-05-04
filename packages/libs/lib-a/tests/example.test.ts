import {exampleFunction} from '../'

describe("lib-a unit", () => {
    test("lib-a test", () => {
        expect(exampleFunction(1,1)).toBe(2)
    })
})