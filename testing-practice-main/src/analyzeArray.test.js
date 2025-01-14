import { analyzeArray } from "./analyzeArray";

test("[1, 2, 3, 4, 5, 6, 7, 8]", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual({
        average: 5,
        min: 1,
        max: 8,
        length: 8,
    });
});

test("[1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("[25, 8, 13, 56, 78, 19, 34]", () => {
    expect(analyzeArray([25, 8, 13, 56, 78, 19, 34])).toEqual({
        average: 33,
        min: 8,
        max: 78,
        length: 7,
    });
});
