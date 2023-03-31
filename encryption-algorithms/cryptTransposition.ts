


export default class cryptTransposition{

        
    static encryptTransposition(data:string, key:string){
            const keyLength = key.length;
            const messageLength = data.length;

            // Criando uma matriz para armazenar a mensagem em colunas
            const messageMatrix: string[][] = [];
            for (let i = 0; i < keyLength; i++) {
                messageMatrix.push([]);
            }

            // Preenchendo a matriz com a mensagem
            for (let i = 0; i < messageLength; i++) {
                const columnIndex = i % keyLength;
                messageMatrix[columnIndex].push(data.charAt(i));
            }

            // Ordenando as colunas de acordo com a chave
            const sortedColumns = key.split('').sort().map((char) => {
                return messageMatrix[key.indexOf(char)];
            });

            // Juntando as colunas em uma única string
            const encryptedMessage = sortedColumns.reduce((accumulator, column) => {
                return accumulator + column.join('');
            }, '');
            return encryptedMessage;
    }




    static descryptTransposition(data:string, key:string){
            const numColumns = key.length;
            const numRows = Math.ceil(data.length / numColumns);
            const numEmptyCells = (numRows * numColumns) - data.length;

            let plainText = "";
            let columnIndex = 0;
            let rowIndex = 0;
            const matrix: string[][] = new Array(numRows).fill(null).map(() => new Array(numColumns));

            // Preencher matriz com cifra de transposição
            for (let i = 0; i < data.length; i++) {
                if (columnIndex === numColumns) {
                columnIndex = 0;
                rowIndex++;
                }
                if (rowIndex === numRows - 1 && columnIndex >= numColumns - numEmptyCells) {
                columnIndex++;
                continue;
                }
                matrix[rowIndex][columnIndex] = data[i];
                columnIndex++;
            }

            // Desembaralhar colunas na ordem original
            const keyIndexes = key.split("").map((char) => matrix[0].indexOf(char));
            for (let i = 0; i < numColumns; i++) {
                const column = keyIndexes.indexOf(i);
                for (let j = 1; j < numRows; j++) {
                plainText += matrix[j][column] || "";
                }
            }

            return plainText;
                }
}  