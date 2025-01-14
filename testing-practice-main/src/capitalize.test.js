import { capitalize } from "./capitalize";

test("capitalize lowercase string", () => {
    expect(capitalize("ubuntu")).toBe("Ubuntu");
});

test("capitalize string with different letter cases", () => {
    expect(capitalize("caPITalIzEd")).toBe("Capitalized");
});

test("capitalize string with spaces", () => {
    expect(capitalize("today is A GOOD day")).toBe("Today is a good day");
});
