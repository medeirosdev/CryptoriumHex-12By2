import * as CryptoJS from 'crypto-js';

export default class cryptSimetricDESAES {

    encryptDESAES(data:string, key:string){
        const cryptText = CryptoJS.DES.encrypt(data, key).toString();
        const cryptText2 = CryptoJS.AES.encrypt(cryptText, key).toString();
        return cryptText2
    }

    decryptDESAES(data:string, key:string){
        const descryptText = CryptoJS.AES.decrypt(data , key).toString();
        const descryptText2 = CryptoJS.DES.decrypt(descryptText , key).toString();
        return descryptText2
    }

}