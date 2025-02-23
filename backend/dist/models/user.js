"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
class User extends sequelize_1.Model {
}
User.init({
    name: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'users',
    sequelize: config_1.default
});
exports.default = User;
