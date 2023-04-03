import CaesarCipher from "../encryption-algorithms/Caesar_cipher"
import Cripto_Monoalfa from "../encryption-algorithms/Cripto_monoalfabetica"
import cryptSimetricDESAES from "../encryption-algorithms/cryptDESAES"
import cryptRSA from "../encryption-algorithms/cryptRSA"
import cryptSimetricAES from "../encryption-algorithms/cryptSimetricAES"
import cryptSimetricDES from "../encryption-algorithms/cryptSimetricDES"
import cryptTransposition from "../encryption-algorithms/cryptTransposition"
import cryptVigenere from "../encryption-algorithms/cryptVigenere"





export default class ChooseEncrypt {

    static between9options(data:string ,n:number){

            switch(n){
                case 1:
                    const key1 = "ADBWEWASD"
                    const result1 = cryptSimetricAES.encryptAES(data, key1)
                    return result1;
                   

                case 2:
                    const key2 = "ADBWEWASD"
                    const result2 = CaesarCipher.CriptCipher(data , 5)
                    return result2;
                   

                case 3:
                    const key3 = "ADBWEWASD"
                    const result3 = cryptSimetricDESAES.encryptDESAES(data )
                    return result3;
                   

                case 4:
                    const key4 = "ADBWEWASD22"
                    const result4 = cryptSimetricAES.encryptAES(data, key4)
                    return result4;
                
            
                case 5: 
                    const key5 = "ADBWEWASD"
                    const result5 = cryptSimetricAES.encryptAES(data, key5)
                    return result5;
              

                case 6:
                    const key6 : string = "ADBWEWASD"
                    const result6 = cryptSimetricDES.encryptDES(data)
                    return result6;
                 

                case 7:
                    const result7 = cryptTransposition.encryptTransposition(data , "BANANA" )
                    return result7;
                

                case 8:
                    const key8 = "ADBWEWASD"
                    const result8 = cryptVigenere.encryptVigenere(data , key8 )
                    return result8;
                   

                case 9:
                    const key9 = "ADBWEWASD"
                    const result9 = cryptVigenere.encryptVigenere(data , key9 )
                    return result9;
                  

                default:
                    const result10 = cryptTransposition.encryptTransposition(data , "BANANA" )
                    return result10;
        }
    }
}