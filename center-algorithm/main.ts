import Utility from "../util/util_Functions";
import ChooseEncrypt from "../center-algorithm/chooseEncrypt"

export default class CryptoriumHex {


    static Start(data:string|number){
        const code = []

        const n1 : number = (Utility.giveRandomNumber(10)) + 1;
        const data1  = ChooseEncrypt.between9options("data" , n1)
        
        const n2 : number = (Utility.giveRandomNumber(10)) + 1;
        const data2 = ChooseEncrypt.between9options( data1 , n2)

        const n3 : number = (Utility.giveRandomNumber(10)) + 1;
        const data3 = ChooseEncrypt.between9options( data2 , n3)

        const n4 : number = (Utility.giveRandomNumber(10)) + 1;
        const data4 = ChooseEncrypt.between9options( data3 , n4)

        const n5 : number = (Utility.giveRandomNumber(10)) + 1;
        const data5 = ChooseEncrypt.between9options( data4 , n5)

        const n6 : number = (Utility.giveRandomNumber(10)) + 1;
        const data6 = ChooseEncrypt.between9options( data5 , n6)

        const n7 : number = (Utility.giveRandomNumber(10)) + 1;
        const data7 = ChooseEncrypt.between9options( data6 , n7)

        const n8 : number = (Utility.giveRandomNumber(10)) + 1;
        const data8 = ChooseEncrypt.between9options( data7 , n8)

        const n9 : number = (Utility.giveRandomNumber(10)) + 1;
        const data9 = ChooseEncrypt.between9options( data8  ,n9)
        code.push(n1 , n2 , n3 , n4 , n5 , n6 , n7 , n8 , n9)
        return (data9 + code)
        console.log(data9 + "==" + code)
        console.log(code)
        
    }


}

console.log(CryptoriumHex.Start("a"))
