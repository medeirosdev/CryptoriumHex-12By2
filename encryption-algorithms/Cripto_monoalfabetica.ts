const Key = "xpmzgobqruafltynkvcjedihws";

export default class Cripto_Monoalfa {
    
    static mono_cript(data:string , key:string) : string {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let ciphertext = "";
        for (let i = 0; i < data.length; i++) {
          const char = data[i].toLowerCase();
          const charIndex = alphabet.indexOf(char);
          if (charIndex === -1) {
            ciphertext += char;
          } else {
            const cipherChar = key[charIndex];
            ciphertext += data[i] === data[i].toUpperCase() ? cipherChar.toUpperCase() : cipherChar;
          }
        }
        return ciphertext;
  }





    static mono_descript(data:string , key:string){
        const alphabets = "abcdefghijklmnopqrstuvwxyz";
        let decryptedMessage = "";
      
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
          const charIndex = key.indexOf(char);
      
          if (charIndex !== -1) {
            decryptedMessage += alphabets[charIndex];
          } else {
            decryptedMessage += char;
          }
        }
        return decryptedMessage;
    }
}

const a = Cripto_Monoalfa.mono_cript("aasdasdasd" , Key)
console.log(a)
const b = Cripto_Monoalfa.mono_descript(a , Key)
console.log(b)