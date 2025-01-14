import { caesarCipher } from "./caesarCipher";

test("abc -> def", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("xyz -> cde", () => {
    expect(caesarCipher("xyz", 5)).toBe("cde");
});

test("Hello, World! -> Khoor, Zruog!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
