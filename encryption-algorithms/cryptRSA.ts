import crypto from 'crypto';

// Criando o par de chaves pública e privada
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Tamanho da chave
});

export default class cryptRSA {

    static encrypt(data:string){
        // Criptografando a mensagem com a chave pública
        const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(data));

        // Convertendo a mensagem criptografada para Base64
        const encryptedData2 = encryptedData.toString('base64');
        return encryptedData
    }


    static Decrypt(data:string){
        // Descriptografando a mensagem com a chave privada
        const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(data));

        // Convertendo a mensagem descriptografada para texto
        const decryptedMessage = decryptedData.toString();
        return decryptedMessage
    }
    
}

