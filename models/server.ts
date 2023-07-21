import express, { Application } from "express";
import cors from 'cors';
import userRoutes from "../routes/users";
import productsRoutes from "../routes/products";
import customerRoutes from "../routes/customers";
import quotationRoutes from "../routes/quotation";
import detailRoutes from "../routes/detail"
import rolesRoutes from "../routes/roles"
import authRoutes from "../routes/auth";
import db from '../db/connection'

class server{
    private app: Application;
    private port: string | undefined;
    private apiPaths={
        auth:'/api/auth',
        user: '/api/users',
        products: '/api/products',
        customers: '/api/customers',
        quotation: '/api/quotation',
        detail: '/api/detail',
        roles: '/api/roles'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.middlewares()
        this.routes()
        this.dbConnection()
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        // Lectura y Parse del body
        this.app.use(express.json());
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.apiPaths.auth, authRoutes)
        this.app.use(this.apiPaths.user, userRoutes)
        this.app.use(this.apiPaths.products, productsRoutes)
        this.app.use(this.apiPaths.customers, customerRoutes)
        this.app.use(this.apiPaths.quotation, quotationRoutes)  
        this.app.use(this.apiPaths.detail, detailRoutes)
        this.app.use(this.apiPaths.roles, rolesRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se está ejecuntando en el puerto: ${this.port}`);
        })
    }    
}

export default server