"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Caesar_cipher_1 = __importDefault(require("../encryption-algorithms/Caesar_cipher"));
const cryptDESAES_1 = __importDefault(require("../encryption-algorithms/cryptDESAES"));
const cryptSimetricAES_1 = __importDefault(require("../encryption-algorithms/cryptSimetricAES"));
const cryptSimetricDES_1 = __importDefault(require("../encryption-algorithms/cryptSimetricDES"));
const cryptTransposition_1 = __importDefault(require("../encryption-algorithms/cryptTransposition"));
const cryptVigenere_1 = __importDefault(require("../encryption-algorithms/cryptVigenere"));
class ChooseEncrypt {
    static between9options(data, n) {
        switch (n) {
            case 1:
                const key1 = "ADBWEWASD";
                const result1 = cryptSimetricAES_1.default.encryptAES(data, key1);
                return result1;
            case 2:
                const key2 = "ADBWEWASD";
                const result2 = Caesar_cipher_1.default.CriptCipher(data, 5);
                return result2;
            case 3:
                const key3 = "ADBWEWASD";
                const result3 = cryptDESAES_1.default.encryptDESAES(data);
                return result3;
            case 4:
                const key4 = "ADBWEWASD22";
                const result4 = cryptSimetricAES_1.default.encryptAES(data, key4);
                return result4;
            case 5:
                const key5 = "ADBWEWASD";
                const result5 = cryptSimetricAES_1.default.encryptAES(data, key5);
                return result5;
            case 6:
                const key6 = "ADBWEWASD";
                const result6 = cryptSimetricDES_1.default.encryptDES(data);
                return result6;
            case 7:
                const result7 = cryptTransposition_1.default.encryptTransposition(data, "BANANA");
                return result7;
            case 8:
                const key8 = "ADBWEWASD";
                const result8 = cryptVigenere_1.default.encryptVigenere(data, key8);
                return result8;
            case 9:
                const key9 = "ADBWEWASD";
                const result9 = cryptVigenere_1.default.encryptVigenere(data, key9);
                return result9;
            default:
                const result10 = cryptTransposition_1.default.encryptTransposition(data, "BANANA");
                return result10;
        }
    }
}
exports.default = ChooseEncrypt;
