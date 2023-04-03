import Sequelize, { Model } from "sequelize";
const sequelize= require("../db/connMySQL")
// Define a model
const DataModel = sequelize.define('DataModel', {
  user_Id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  data: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  

});

export {DataModel}