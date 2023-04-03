"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_Functions_1 = __importDefault(require("../util/util_Functions"));
const chooseEncrypt_1 = __importDefault(require("../center-algorithm/chooseEncrypt"));
class CryptoriumHex {
    static Start(data) {
        const code = [];
        const n1 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data1 = chooseEncrypt_1.default.between9options("data", n1);
        const n2 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data2 = chooseEncrypt_1.default.between9options(data1, n2);
        const n3 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data3 = chooseEncrypt_1.default.between9options(data2, n3);
        const n4 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data4 = chooseEncrypt_1.default.between9options(data3, n4);
        const n5 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data5 = chooseEncrypt_1.default.between9options(data4, n5);
        const n6 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data6 = chooseEncrypt_1.default.between9options(data5, n6);
        const n7 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data7 = chooseEncrypt_1.default.between9options(data6, n7);
        const n8 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data8 = chooseEncrypt_1.default.between9options(data7, n8);
        const n9 = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data9 = chooseEncrypt_1.default.between9options(data8, n9);
        code.push(n1, n2, n3, n4, n5, n6, n7, n8, n9);
        return (data9 + code);
        console.log(data9 + "==" + code);
        console.log(code);
    }
}
exports.default = CryptoriumHex;
console.log(CryptoriumHex.Start("a"));
