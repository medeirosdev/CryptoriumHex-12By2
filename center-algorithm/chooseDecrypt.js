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
class Descrypt9codes {
    static select_decrypt(n, data) {
        switch (n) {
            case 1:
                const key1 = "ADBWEWASD";
                const result1 = cryptSimetricAES_1.default.decryptAES(data);
                return result1;
            case 2:
                const key2 = "ADBWEWASD";
                const result2 = Caesar_cipher_1.default.DecriptCipher(data, 5);
                return result2;
            case 3:
                const key3 = "ADBWEWASD";
                const result3 = cryptDESAES_1.default.decryptDESAES(data);
                return result3;
            case 4:
                const key4 = "ADBWEWASD22";
                const result4 = cryptSimetricAES_1.default.decryptAES(data);
                return result4;
            case 5:
                const key5 = "ADBWEWASD";
                const result5 = cryptSimetricAES_1.default.decryptAES(data);
                return result5;
            case 6:
                const key6 = "ADBWEWASD";
                const result6 = cryptSimetricDES_1.default.decryptDES(data);
                return result6;
            case 7:
                const result7 = cryptTransposition_1.default.descryptTransposition(data, "BANANA");
                return result7;
            case 8:
                const key8 = "ADBWEWASD";
                const result8 = cryptVigenere_1.default.descryptVigenere(data, key8);
                return result8;
            case 9:
                const key9 = "ADBWEWASD";
                const result9 = cryptVigenere_1.default.descryptVigenere(data, key9);
                return result9;
            default:
                const result10 = cryptTransposition_1.default.descryptTransposition(data, "BANANA");
                return result10;
        }
    }
    static this_data(data) {
        const strData = data.slice(0, data.indexOf("="));
        const lastNine = data.substring(data.length - 17);
        console.log(strData);
        const nineCode = lastNine.split(',').map(Number);
        console.log(nineCode);
        const d1 = Descrypt9codes.select_decrypt(nineCode[8], strData);
        console.log("esse é o texto 1  : " + d1 + nineCode[8]);
        const d2 = Descrypt9codes.select_decrypt(nineCode[7], d1);
        console.log("esse é o texto 2  : " + d2);
        const d3 = Descrypt9codes.select_decrypt(nineCode[6], d2);
        console.log("esse é o texto 3  : " + d3);
        const d4 = Descrypt9codes.select_decrypt(nineCode[5], d3);
        console.log("esse é o texto 4  : " + d4);
        const d5 = Descrypt9codes.select_decrypt(nineCode[4], d4);
        console.log("esse é o texto 5  : " + d5);
        const d6 = Descrypt9codes.select_decrypt(nineCode[3], d5);
        console.log("esse é o texto 6  : " + d6);
        const d7 = Descrypt9codes.select_decrypt(nineCode[2], d6);
        console.log("esse é o texto 7  : " + d7);
        const d8 = Descrypt9codes.select_decrypt(nineCode[1], d7);
        console.log("esse é o texto 8  : " + d8);
        const d9 = Descrypt9codes.select_decrypt(nineCode[0], d8);
        console.log("esse é o texto 9  : " + d9);
        return d9;
    }
}
exports.default = Descrypt9codes;
const data = "U2FsdGVkX188K3oVM82kmU/OLRBJ00h/dS2ZgeIK5TNLpniP/3VkpYSUrYv1Ms0Fql3S2gh+fx7qAjeC9blXLNB5KuSoBmxuY0au7DoGoLubaMp/gg6/o+z7yqwnQOu4e7kg6c7As8PcHg/AnJy1ni/5+vSUkFxUgk0B43efGFZE7rLhGhC/3JRDxJqOkVBlXU+tZZGki0IdhMsTVDuPvNLUf2rIr7LnyLRwE8r9EJQ=5,9,4,10,4,7,7,7,1";
console.log(Descrypt9codes.this_data(data));
