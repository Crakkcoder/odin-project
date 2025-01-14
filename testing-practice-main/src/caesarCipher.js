export function caesarCipher(string, shift) {
    let result = [...string].map((char) => {
        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = char === char.toUpperCase();
            let alphabetIndex = alphabet.indexOf(char.toLowerCase());
            let shiftedIndex = (alphabetIndex + shift) % 26;

            if (isUpperCase) {
                return alphabet[shiftedIndex].toUpperCase();
            }
            return alphabet[shiftedIndex];
        }

        return char;
    });

    return result.join("");
}

const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
