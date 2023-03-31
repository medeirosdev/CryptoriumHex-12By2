"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Criando o par de chaves pública e privada
const { publicKey, privateKey } = crypto_1.default.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Tamanho da chave
});
class cryptRSA {
    static encrypt(data) {
        // Criptografando a mensagem com a chave pública
        const encryptedData = crypto_1.default.publicEncrypt(publicKey, Buffer.from(data));
        // Convertendo a mensagem criptografada para Base64
        const encryptedData2 = encryptedData.toString('base64');
        return encryptedData;
    }
    static Decrypt(data) {
        // Descriptografando a mensagem com a chave privada
        const decryptedData = crypto_1.default.privateDecrypt(privateKey, Buffer.from(data));
        // Convertendo a mensagem descriptografada para texto
        const decryptedMessage = decryptedData.toString();
        return decryptedMessage;
    }
}
exports.default = cryptRSA;
