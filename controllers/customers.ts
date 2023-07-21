import { Request, Response } from "express";
import Customers from "../models/customers"
import Users from "../models/users";

export const getCustomers = async(req: Request, res: Response) => {
    const customers = await Customers.findAll({
        include:[{
            model:Users
        }],
        where: {
            state: 1
        }
    })
    res.status(200).json({
        msg:"Consultar Clientes",
        customers
    })
}

export const getCustomerById = async (req: Request, res: Response) =>{
    const {id}=req.params;
    const customer = await Customers.findByPk(id)
    if (customer) {
        res.status(200).json({
            msg: "Consultar Cliente por ID",
            customer
        })        
    }else{
        res.status(404).json({
            msg :"Cliente no existe"
        })
    }
}

export const getCustomerByName = async (req: Request, res: Response) =>{
    const {first_name}=req.params;
    const customer = await Customers.findAll({
        where:{
            first_name
        }
    })
    res.status(200).json({
        msg: "Consultar Clientes por Nombre",
        customer
    })
}

export const saveCustomer = async (req: Request, res: Response) => {
    const{ document, first_name, second_name,first_lastName, second_lastName, city, address, phone, email} = req.body //se recibe por el body
    const idUsers = 2
    const customer = await Customers.create({document, first_name, second_name,first_lastName, second_lastName, city, address, phone, email, idUsers}) //no se envia el state
    res.status(200).json({
        msg: `CREACION DE CLIENTES
        Se ha registrado un nuevo cliente con el ID: ${customer.dataValues.id}`
    })
}

export const updateCustomer = async (req: Request, res: Response) => {
    const{ id, document, first_name, second_name,first_lastName, second_lastName, city, address, phone, email,state, idUsers} = req.body

    const customer = await Customers.update({document, first_name, second_name,first_lastName, second_lastName, city, address, phone, email, state, idUsers}, {
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`ACTUALIZACION DE CLIENTES
        El cliente con el ID: ${id} se ha actualizado`
    })
}

export const deleteCustomer = async(req: Request, res: Response) => {
    const{id} = req.params
    const state = 0

    const customer = await Customers.update({state}, {
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`ELIMINAR CLIENTES
            El cliente con el ID: ${id} se ha eliminado`
    })
}