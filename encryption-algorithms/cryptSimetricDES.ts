import * as CryptoJS from 'crypto-js';

export default class cryptSimetricDES {

    static encryptDES(data:string){
        const cryptText = CryptoJS.DES.encrypt(data,"Secret Passphrase").toString();
        return cryptText
    }

    static decryptDES(data:string){
        const descryptText = CryptoJS.DES.decrypt(data , "Secret Passphrase").toString();
        return descryptText
    }

}