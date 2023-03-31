"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_Functions_1 = __importDefault(require("../util/util_Functions"));
const chooseEncrypt_1 = __importDefault(require("../center-algorithm/chooseEncrypt"));
class CryptoriumHex {
    static Start(data) {
        const n = (util_Functions_1.default.giveRandomNumber(10)) + 1;
        const data2 = chooseEncrypt_1.default.between9options("data", n);
        console.log(data2);
    }
}
exports.default = CryptoriumHex;
CryptoriumHex.Start("data");
console.log(util_Functions_1.default.giveRandomNumber(10));
