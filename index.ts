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


//==================== DB & Routes Start Script=====================//
const connMySQL = require('./db/connMySQL');
const mongoose = require('./db/connMongoDB')
//==================================================================//
try{
    connMySQL.sync()
    mongoose.sync()
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