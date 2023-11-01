import { test, expect } from "bun:test";

const testDeeplyNested = {
    prop: {
        prop: {
            prop: {
                prop: {
                    value: 1464.050670539301,
                },
            },
        },
    },
};

const expectedDeeplyNested = {
    prop: {
        prop: {
            prop: {
                prop: {
                    value: 1464.0506705393013,
                },
            },
        },
    },
};

test("Deeply nested floating point boogaloo", () => {
    expect(testDeeplyNested).toEqual(expectedDeeplyNested);
});
