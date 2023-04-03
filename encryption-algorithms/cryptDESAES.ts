import * as CryptoJS from 'crypto-js';

export default class cryptSimetricDESAES {

    static encryptDESAES(data:string){
        const cryptText = CryptoJS.DES.encrypt(data, "Secret Passphrase").toString();
        const cryptText2 = CryptoJS.AES.encrypt(cryptText, "Secret Passphrase").toString();
        return cryptText2
    }

    static decryptDESAES(data:string){
        const descryptText = CryptoJS.AES.decrypt(data , "Secret Passphrase").toString();
        const descryptText2 = CryptoJS.DES.decrypt(descryptText , "Secret Passphrase").toString();
        return descryptText2
    }

}