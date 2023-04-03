import { Sequelize } from 'sequelize-typescript';


const connMySQL = new Sequelize({
    database: 'cryptorium',
    dialect: 'mysql',
    username: 'gui',
    password: 'guigui167',
    models: [__dirname + '/models'] // caminho para os modelos
  });

try {
    //sequelize.authenticate()
    console.log("Conectamos com sucesso")
} catch(err){
    console.log("Não foi possível" + err)
}




export default connMySQL;


//db.sequelize = sequelize;
//db.Sequelize = Sequelize;
//module.exports = db;
