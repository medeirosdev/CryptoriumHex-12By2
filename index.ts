//===================== IMPORTS ====================================//
import express from "express"                                     //
import { Request, Response } from "express";                //                        
//==================================================================//
//========================== Instanciar ============================//
const app = express();                                              //
const port = 3333                                          //
//==================================================================//
//======================= Express Config ===========================//
app.use(express.json())                                             //                                                                //
//==================================================================//


//======================== APP Routes ==============================//                                                   //

//
//============================ Models ==============================//
const DataModel = require('./models/dataModel')
const codeModel = require('./models/codeMode')
//==================== DB & Routes Start Script=====================//
import sequelize from './db/connMySQL';
import { connectToMongo } from './db/connMongoDB';
//==================================================================//
try{
    sequelize.sync({force: true})
    connectToMongo()
    // colocar {force: true} ao alterar dados no BD
.then( ()=> {
    console.log('server rodando na porta: ', port)
    app.listen(port)
})
.catch((err : any)=> {console.log(err)})
}catch(e:any){
    console.log(e)
}


//===================================================================