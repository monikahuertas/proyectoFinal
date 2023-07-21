import { Request, Response } from "express";
import Detail from "../models/detail";

export const getDetail = async(req: Request, res: Response) => {
    const detail = await Detail.findAll({
        where: {
            state: 1
        }
    })
    res.status(200).json({
        msg:"CONSULTAR DETALLE DE COTIZACION",
        detail
    })
}

// export const getDetailById = async(req: Request, res: Response) =>{
//     const {idCotizacion} = req.params
//     const detail = Detail.findAll({
//         where:{
//             idCotizacion//preguntar por que no funciona
//         }
//     })
//     res.status(200).json({
//         msg:"CONSULTAR DETALLE DE COTIZACION",
//         detail
//     })
// }

export const saveDetail = async(req:Request, res: Response)=>{
    const {idCotizacion, idProducto, cantidad, valor_unitario, valor_total} = req.body
    const state = 1
    const detail= await Detail.create({idCotizacion, idProducto, cantidad, valor_unitario, valor_total, state})
    
    res.status(200).json({
        msg:'Detalle creado',
        detail
    })
}

export const updateDetail = async(req:Request, res:Response)=>{
    const {id, idCotizacion, idProducto, cantidad, valor_unitario, valor_total, state}=req.body
    const detail = await Detail.update({idCotizacion, idProducto, cantidad, valor_unitario, valor_total, state},{
        where:{
            id
        }
    })
    res.status(200).json({
        msg:`El detalle con el ID: ${id} se ha actualizado`
    })
}

export const deleteDetail = async (req:Request, res:Response)=>{
    const{id} = req.params
    const state =0

    const detail = await Detail.update({state},{
        where:{
            id
        }
    })
    res.status(200).json({
        msg:`El detalle con el ID: ${id} se ha eliminado`
    })
}