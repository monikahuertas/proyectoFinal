"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Customers = connection_1.default.define("Customer", {
    Document: {
        type: sequelize_1.DataTypes.STRING
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    second_name: {
        type: sequelize_1.DataTypes.STRING
    },
    first_lastName: {
        type: sequelize_1.DataTypes.STRING
    },
    second_lastName: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    idUsers: {
        type: sequelize_1.DataTypes.BIGINT
    }
});
exports.default = Customers;
