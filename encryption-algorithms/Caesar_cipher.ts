
const keyCaesar = 4

export default class CaesarCipher {

    

    static CriptCipher(data:string , keyCaesar : number){
        const dataSplit = data.split("");

        const textoAscii = dataSplit.map((t)=>{ 
            return t.codePointAt(0)})  
        
        const textRotation = textoAscii.map((n : any)=>{
            return(n-65 + keyCaesar )%26+65
        })
        const textCifrado = textRotation.map((n)=>{
            return String.fromCharCode(n);
        })
        return textCifrado.join("")
        console.log(textCifrado.join("")) 
    }



    static DecriptCipher(data:string , keyCaesar : number){
        const dataSplit = data.split("");

        const textoAscii = dataSplit.map((t)=>{ 
            return t.codePointAt(0)})

        const textRotation = textoAscii.map((n : any)=>{
            return(n+65 - keyCaesar )%26+65
        })

        const textCifrado = textRotation.map((n)=>{
              return String.fromCharCode(n);
        })
        return textCifrado.join("")
        console.log(textCifrado.join("")) 

    }
    
}



console.log(CaesarCipher.CriptCipher("MAORNKXSK" , 5 ))
console.log(CaesarCipher.DecriptCipher("RFTWSPCXP" , 5 ))