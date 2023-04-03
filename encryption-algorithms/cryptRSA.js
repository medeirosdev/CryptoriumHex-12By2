"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Criando o par de chaves pública e privada
class CryptRSA {
    static encrypt(data, publicKey) {
        // Criptografando a mensagem com a chave pública
        const encryptedData = crypto_1.default.publicEncrypt({
            key: publicKey,
            padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, Buffer.from(data));
        // Convertendo a mensagem criptografada para Base64
        const encryptedData2 = encryptedData.toString("base64");
        return encryptedData2;
    }
    static decrypt(data, privateKey) {
        // Convertendo a mensagem criptografada de Base64 para Buffer
        const encryptedBuffer = Buffer.from(data, "base64");
        // Descriptografando a mensagem com a chave privada
        const decryptedData = crypto_1.default.privateDecrypt({
            key: privateKey,
            padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, encryptedBuffer);
        return decryptedData.toString();
    }
}
exports.default = CryptRSA;
// Gerando as chaves
const { publicKey, privateKey } = crypto_1.default.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
    },
    privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
    },
});
// Exemplo de uso
const message = "Olá, mundo!";
const encryptedMessage = CryptRSA.encrypt(message, "aaaaa");
console.log("Mensagem criptografada:", encryptedMessage);
const decryptedMessage = CryptRSA.decrypt(encryptedMessage, "aaaaa");
console.log("Mensagem descriptografada:", decryptedMessage);
