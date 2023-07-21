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
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
const products_1 = __importDefault(require("../routes/products"));
const connection_1 = __importDefault(require("../db/connection"));
class server {
    constructor() {
        this.apiPaths = {
            user: '/api/users',
            products: '/api/products'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbConnection();
        this.middlewares();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('database online');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        // Lectura y Parse del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.user, users_1.default);
        this.app.use(this.apiPaths.products, products_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se está ejecuntando en el puerto: ${this.port}`);
        });
    }
}
exports.default = server;
