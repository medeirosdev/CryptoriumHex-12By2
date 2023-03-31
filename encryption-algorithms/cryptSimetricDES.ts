import * as CryptoJS from 'crypto-js';

export default class cryptSimetricDES {

    encryptDES(data:string, key:string){
        const cryptText = CryptoJS.DES.encrypt(data, key).toString();
        return cryptText
    }

    decryptDES(data:string, key:string){
        const descryptText = CryptoJS.DES.decrypt(data , key).toString();
        return descryptText
    }

}