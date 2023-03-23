"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyCaesar = 4;
class CaesarCipher {
    static CriptCipher(data, keyCaesar) {
        const dataSplit = data.split("");
        const textoAscii = dataSplit.map((t) => {
            return t.codePointAt(0);
        });
        const textRotation = textoAscii.map((n) => {
            return (n - 65 + keyCaesar) % 26 + 65;
        });
        const textCifrado = textRotation.map((n) => {
            return String.fromCharCode(n);
        });
        return textCifrado.join("");
        console.log(textCifrado.join(""));
    }
    static DecriptCipher(data, keyCaesar) {
        const dataSplit = data.split("");
        const textoAscii = dataSplit.map((t) => {
            return t.codePointAt(0);
        });
        const textRotation = textoAscii.map((n) => {
            return (n + 65 - keyCaesar) % 26 + 65;
        });
        const textCifrado = textRotation.map((n) => {
            return String.fromCharCode(n);
        });
        return textCifrado.join("");
        console.log(textCifrado.join(""));
    }
}
exports.default = CaesarCipher;
console.log(CaesarCipher.CriptCipher("MAORNKXSK", 5));
console.log(CaesarCipher.DecriptCipher("RFTWSPCXP", 5));
