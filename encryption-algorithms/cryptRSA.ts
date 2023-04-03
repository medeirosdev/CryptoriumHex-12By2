import crypto from 'crypto';
import { KeyObject } from 'crypto';

// Criando o par de chaves pública e privada

export default class CryptRSA {
    static encrypt(data: string, publicKey : string): string {
      // Criptografando a mensagem com a chave pública
      const encryptedData = crypto.publicEncrypt(
        {
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: "sha256",
        },
        Buffer.from(data)
      );
  
      // Convertendo a mensagem criptografada para Base64
      const encryptedData2 = encryptedData.toString("base64");
      return encryptedData2;
    }
  
    static decrypt(data: string, privateKey: string): string {
      // Convertendo a mensagem criptografada de Base64 para Buffer
      const encryptedBuffer = Buffer.from(data, "base64");
  
      // Descriptografando a mensagem com a chave privada
      const decryptedData = crypto.privateDecrypt(
        {
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: "sha256",
        },
        encryptedBuffer
      );
  
      return decryptedData.toString();
    }
  }
  
  // Gerando as chaves
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
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