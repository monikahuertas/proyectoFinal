"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.updateUsers = exports.saveUsers = exports.consultUserByDocu = exports.consultUserById = exports.consultUsers = void 0;
const users_1 = __importDefault(require("../models/users"));
const consultUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.findAll();
    res.status(200).json({
        msg: "Consultar Usuarios",
        users
    });
});
exports.consultUsers = consultUsers;
const consultUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_1.default.findByPk(id);
    if (user) {
        res.status(200).json({
            user
        });
    }
    else {
        res.status(404).json({
            msg: "Usuario no existe"
        });
    }
});
exports.consultUserById = consultUserById;
const consultUserByDocu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Document } = req.params;
    const user = yield users_1.default.findAll({
        where: {
            Document
        }
    });
    res.status(200).json({
        user
    });
});
exports.consultUserByDocu = consultUserByDocu;
const saveUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Document, names, email, password, state } = req.body;
    const user = yield users_1.default.create({ Document, names, email, password, state });
    res.status(200).json({
        // msg:"Guardar Usuarios TS"
        msg: `Se ha registrado un nuevo usuario con el ID: ${user.dataValues.id}`
    });
});
exports.saveUsers = saveUsers;
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, Document, names, email, password, state } = req.body;
    const user = yield users_1.default.update({ Document, names, email, password, state }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El usuario con el ID: ${id} se ha actualizado`
    });
});
exports.updateUsers = updateUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El usuario con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteUsers = deleteUsers;
