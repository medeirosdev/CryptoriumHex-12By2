"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cryptTransposition {
    static encryptTransposition(data, key) {
        const keyLength = key.length;
        const messageLength = data.length;
        // Criando uma matriz para armazenar a mensagem em colunas
        const messageMatrix = [];
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
    static descryptTransposition(data, key) {
        const keyLength = key.length;
        const messageLength = data.length;
        // Criando uma matriz para armazenar a mensagem em colunas
        const messageMatrix = [];
        for (let i = 0; i < keyLength; i++) {
            messageMatrix.push([]);
        }
        // Preenchendo a matriz com a mensagem criptografada
        let index = 0;
        for (let i = 0; i < keyLength; i++) {
            const column = key.indexOf(i.toString());
            for (let j = 0; j < Math.ceil(messageLength / keyLength); j++) {
                if (index < messageLength) {
                    messageMatrix[column][j] = data.charAt(index);
                    index++;
                }
            }
        }
        // Recuperando a mensagem original
        let plainText = '';
        for (let i = 0; i < Math.ceil(messageLength / keyLength); i++) {
            for (let j = 0; j < keyLength; j++) {
                const character = messageMatrix[j][i];
                if (character !== undefined) {
                    plainText += character;
                }
            }
        }
        return plainText;
    }
}
exports.default = cryptTransposition;
