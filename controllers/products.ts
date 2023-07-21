import { Request, Response } from "express";
import Products from '../models/products'
import Users from "../models/users";

export const getProducts = async (req:Request , res :Response) => {
    const products = await Products.findAll({
        include:[{
            model:Users
        }],
    })

    res.status(200).json({
        msg:"Consultar Productos",
        products
    })
}

export const getProductsById = async (req: Request, res: Response) =>{
    const {id}=req.params;
    const product = await Products.findByPk(id)

    if (product) {
        res.status(200).json({
            product
        })        
    }else{
        res.status(404).json({
            msg :"Producto no existe"
        })
    }
}

export const getProductsByProd = async (req: Request, res: Response) =>{
    const {product}=req.params;
    const prd = await Products.findAll({
        
        where:{
            product
        }
    })
    res.status(200).json({
        prd
    })
}

export const saveProduct = async (req: Request, res: Response) => {
    const{ product, Stock, Purchase_Price,Sale_Price} = req.body
    const idUsers = 2
    const prd = await Products.create({product, Stock, Purchase_Price,Sale_Price, idUsers})
    res.status(200).json({
        // msg:"Guardar Usuarios TS"
        msg: `Se ha registrado un nuevo producto con el ID: ${prd.dataValues.id}`
    })
}

export const updateProduct = async (req: Request, res: Response) => {
    const{ id, product, Stock, Purchase_Price,Sale_Price, idUsers} = req.body

    const prd = await Products.update({id, product, Stock, Purchase_Price,Sale_Price, idUsers}, {
        where: {
            id
        }
    })

    res.status(200).json({
        msg:`El producto con el ID: ${id} se ha actualizado`
    })
}

export const deleteProducts = async(req: Request, res: Response) => {
    const{ id } = req.params

    const prd = await Products.destroy({
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`El Producto con el ID: ${id} ha sido eliminado`
    })
}