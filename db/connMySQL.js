"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'cryptorium',
    username: 'gui',
    password: 'guigui167',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
sequelize.sync()
    .then(() => console.log('Models synchronized with MySQL database'))
    .catch((error) => console.error('Error synchronizing models with MySQL database', error));
exports.default = sequelize;
//db.sequelize = sequelize;
//db.Sequelize = Sequelize;
//module.exports = db;
