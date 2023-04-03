import * as CryptoJS from 'crypto-js';

export default class cryptSimetricAES {

    static encryptAES(data:string, key:string){
        const cryptText = CryptoJS.AES.encrypt(data, key).toString();
        return cryptText
    }

    static decryptAES(data:string){
        const descryptText = CryptoJS.AES.decrypt(data , "Secret Passphrase").toString();
        return descryptText
    }

}