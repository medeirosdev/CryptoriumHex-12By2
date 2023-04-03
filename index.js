"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//===================== IMPORTS ====================================//
const express_1 = __importDefault(require("express")); //
//==================================================================//
//========================== Instanciar ============================//
const app = (0, express_1.default)(); //
const port = 3333; //
//==================================================================//
//======================= Express Config ===========================//
app.use(express_1.default.json()); //                                                                //
//==================================================================//
//======================== APP Routes ==============================//                                                   //
//
//============================ Models ==============================//
const DataModel = require('./models/dataModel');
const codeModel = require('./models/codeMode');
//==================== DB & Routes Start Script=====================//
const connMySQL_1 = __importDefault(require("./db/connMySQL"));
const connMongoDB_1 = require("./db/connMongoDB");
//==================================================================//
try {
    connMySQL_1.default.sync({ force: true });
    (0, connMongoDB_1.connectToMongo)()
        // colocar {force: true} ao alterar dados no BD
        .then(() => {
        console.log('server rodando na porta: ', port);
        app.listen(port);
    })
        .catch((err) => { console.log(err); });
}
catch (e) {
    console.log(e);
}
//===================================================================
