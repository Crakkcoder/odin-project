import { calculator } from "./calculator";

test("add", () => {
    expect(calculator.add(12, 5)).toBe(17);
});

test("subtract", () => {
    expect(calculator.subtract(50, 34)).toBe(16);
});

test("multiply", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
});

test("divide", () => {
    expect(calculator.divide(16, 4)).toBe(4);
});

test("divide by 0", () => {
    expect(calculator.divide(5, 0)).toBe(null);
});
