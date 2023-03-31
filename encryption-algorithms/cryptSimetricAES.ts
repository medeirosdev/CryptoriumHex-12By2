import * as CryptoJS from 'crypto-js';

export default class cryptSimetricAES {

    encryptAES(data:string, key:string){
        const cryptText = CryptoJS.AES.encrypt(data, key).toString();
        return cryptText
    }

    decryptAES(data:string, key:string){
        const descryptText = CryptoJS.AES.decrypt(data , key).toString();
        return descryptText
    }

}