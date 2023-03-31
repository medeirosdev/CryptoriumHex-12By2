import Utility from "../util/util_Functions";
import ChooseEncrypt from "../center-algorithm/chooseEncrypt"

export default class CryptoriumHex {


    static Start(data:string|number){
        const n : number = (Utility.giveRandomNumber(10)) + 1;
        const data2 = ChooseEncrypt.between9options("data" , n)
        console.log(data2)
    }


}

CryptoriumHex.Start("data")
console.log(Utility.giveRandomNumber(10))