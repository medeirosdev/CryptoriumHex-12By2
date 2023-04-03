"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Key = "xpmzgobqruafltynkvcjedihws";
class Cripto_Monoalfa {
    static mono_cript(data, key) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let ciphertext = "";
        for (let i = 0; i < data.length; i++) {
            const char = data[i] ? data[i].toLowerCase() : ""; // Check if data[i] exists and convert to lowercase
            const charIndex = alphabet.indexOf(char);
            if (charIndex === -1) {
                ciphertext += char;
            }
            else {
                const cipherChar = key[charIndex];
                ciphertext += data[i] && data[i] === data[i].toUpperCase() ? cipherChar.toUpperCase() : cipherChar; // Check if data[i] exists and preserve original case
            }
        }
        return ciphertext;
    }
    static mono_descript(data, key) {
        const alphabets = "abcdefghijklmnopqrstuvwxyz";
        let decryptedMessage = "";
        for (let i = 0; i < data.length; i++) {
            const char = data[i];
            const charIndex = key.indexOf(char);
            if (charIndex !== -1) {
                decryptedMessage += alphabets[charIndex];
            }
            else {
                decryptedMessage += char;
            }
        }
        return decryptedMessage;
    }
}
exports.default = Cripto_Monoalfa;
