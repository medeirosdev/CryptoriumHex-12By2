import CaesarCipher from "../encryption-algorithms/Caesar_cipher"
import Cripto_Monoalfa from "../encryption-algorithms/Cripto_monoalfabetica"
import cryptSimetricDESAES from "../encryption-algorithms/cryptDESAES"
import cryptRSA from "../encryption-algorithms/cryptRSA"
import cryptSimetricAES from "../encryption-algorithms/cryptSimetricAES"
import cryptSimetricDES from "../encryption-algorithms/cryptSimetricDES"
import cryptTransposition from "../encryption-algorithms/cryptTransposition"
import cryptVigenere from "../encryption-algorithms/cryptVigenere"





export default class Descrypt9codes {

    static select_decrypt(n:number, data:string){
        switch(n){
            case 1:
                const key1 = "ADBWEWASD"
                const result1 = cryptSimetricAES.decryptAES(data)
                return result1;
               

            case 2:
                const key2 = "ADBWEWASD"
                const result2 = CaesarCipher.DecriptCipher(data , 5)
                return result2;
               

            case 3:
                const key3 = "ADBWEWASD"
                const result3 = cryptSimetricDESAES.decryptDESAES(data)
                return result3;
               

            case 4:
                const key4 = "ADBWEWASD22"
                const result4 = cryptSimetricAES.decryptAES(data)
                return result4;
            
        
            case 5: 
                const key5 = "ADBWEWASD"
                const result5 = cryptSimetricAES.decryptAES(data)
                return result5;
          

            case 6:
                const key6 : string = "ADBWEWASD"
                const result6 = cryptSimetricDES.decryptDES(data)
                return result6;
             

            case 7:
                const result7 = cryptTransposition.descryptTransposition(data , "BANANA" )
                return result7;
            

            case 8:
                const key8 = "ADBWEWASD"
                const result8 = cryptVigenere.descryptVigenere(data , key8 )
                return result8;
               

            case 9:
                const key9 = "ADBWEWASD"
                const result9 = cryptVigenere.descryptVigenere(data , key9 )
                return result9;
              

            default:
                const result10 = cryptTransposition.descryptTransposition(data , "BANANA" )
                return result10;
    }

    }

    static this_data(data:string){

        const lastNine = data.substring(data.length - 18);
        console.log(data)
        const nineCode = lastNine.split(',').map(Number);

        console.log(nineCode)
        console.log(nineCode[8])

        const d1 = Descrypt9codes.select_decrypt(nineCode[8] , data)
        console.log(d1)

        const d2 = Descrypt9codes.select_decrypt(nineCode[7] , d1)
        console.log(d2)

        const d3 = Descrypt9codes.select_decrypt(nineCode[6] , d2)
        console.log(d3)

        const d4 = Descrypt9codes.select_decrypt(nineCode[5] , d3)
        console.log(d4)

        const d5 = Descrypt9codes.select_decrypt(nineCode[4] , d4)
        console.log(d5)

        const d6 = Descrypt9codes.select_decrypt(nineCode[3] , d5)
        console.log(d6)

        const d7 = Descrypt9codes.select_decrypt(nineCode[2] , d6)
        console.log(d7)

        const d8 = Descrypt9codes.select_decrypt(nineCode[1] , d7)
        console.log(d8)

        const d9 = Descrypt9codes.select_decrypt(nineCode[0] , d8)
        console.log(d9)
        
        return d9
    }

}




const data = "U2FsdGVkX1/FRPoE0zxo0mLBXeTlxMO0OTA/usV/GYhGzLqi1wgdJt7Bxm7barZILzYY9tOjjUV2cb4Q76jnJQ==xxxxxxxxxx8,10,2,2,7,4,8,7,4"
Descrypt9codes.this_data(data)