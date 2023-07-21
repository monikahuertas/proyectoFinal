"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Products = connection_1.default.define("Product", {
    product: {
        type: sequelize_1.DataTypes.STRING
    },
    Stock: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Purchase_Price: {
        type: sequelize_1.DataTypes.DECIMAL(20, 6)
    },
    Sale_Price: {
        type: sequelize_1.DataTypes.DECIMAL(20, 6)
    },
    idUsers: {
        type: sequelize_1.DataTypes.BIGINT
    }
});
exports.default = Products;
