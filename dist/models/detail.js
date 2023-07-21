"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Detail = connection_1.default.define("Detail", {
    idCotizacion: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idProducto: {
        type: sequelize_1.DataTypes.BIGINT
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    valor_unitario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    valor_total: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Detail;
