import canIterate from "../canIterate";

test.each([
    ['test 1 check new Map ', new Map(), true ],
    ['test 2 check new Set ', new Set(), true],
    ['test 3 check String ', 'String', true],
    ['test 4 check NaN ', NaN, false],
    ['test 5 check Undefined ', undefined, false],
    ['test 6 check null ', null, false],
    ['test 7 check Number ', 15, false]
])('%s',(nameTest, value, correctResult) => {
    expect(canIterate(value)).toBe(correctResult);
})
