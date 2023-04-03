import { Sequelize, Model, DataTypes } from 'sequelize';


const sequelize = new Sequelize({
    database: 'cryptorium',
    username: 'gui',
    password: 'guigui167',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  });

sequelize.sync()
  .then(() => console.log('Models synchronized with MySQL database'))
  .catch((error : any)=> console.error('Error synchronizing models with MySQL database', error));



export default sequelize;


//db.sequelize = sequelize;
//db.Sequelize = Sequelize;
//module.exports = db;
