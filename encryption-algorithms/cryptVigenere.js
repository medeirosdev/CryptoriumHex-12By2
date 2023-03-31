"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cryptVigenere {
    static encryptVigenere(data, key) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let cipherText = "";
        let keyIndex = 0;
        for (let i = 0; i < data.length; i++) {
            const plainTextChar = data[i].toUpperCase();
            const plainTextIndex = alphabet.indexOf(plainTextChar);
            if (plainTextIndex >= 0) {
                const keyChar = key[keyIndex % key.length].toUpperCase();
                const keyIndexInAlphabet = alphabet.indexOf(keyChar);
                const cipherTextIndex = (plainTextIndex + keyIndexInAlphabet) % 26;
                const cipherTextChar = alphabet[cipherTextIndex];
                cipherText += cipherTextChar;
                keyIndex++;
            }
            else {
                cipherText += plainTextChar;
            }
        }
        return cipherText;
    }
    static descryptVigenere(data, key) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const keyRepeated = key.repeat(Math.ceil(data.length / key.length)).slice(0, data.length);
        let result = "";
        for (let i = 0; i < data.length; i++) {
            const dataCharIndex = alphabet.indexOf(data[i].toUpperCase());
            const keyCharIndex = alphabet.indexOf(keyRepeated[i].toUpperCase());
            if (dataCharIndex === -1) {
                // Ignore non-alphabetic characters
                result += data[i];
            }
            else {
                const decryptedIndex = (dataCharIndex - keyCharIndex + 26) % 26;
                const decryptedChar = alphabet.charAt(decryptedIndex);
                result += decryptedChar;
            }
        }
        return result;
    }
}
exports.default = cryptVigenere;
