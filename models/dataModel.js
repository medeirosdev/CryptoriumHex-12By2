"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize = require("../db/connMySQL");
// Define a model
const DataModel = sequelize.define('DataModel', {
    user_Id: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        unique: true
    },
    data: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        unique: true
    },
});
exports.DataModel = DataModel;
