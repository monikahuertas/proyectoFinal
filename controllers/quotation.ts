import { Request, Response } from "express";
import Quotation from "../models/quotation"

export const getQuotations = async (req:Request , res :Response) =>{
    const quotation = await Quotation.findAll()
    res.status(200).json({
        msg:"Consultar Cotizaciones",
        quotation
    })
}

export const getQuotationById = async (req: Request, res: Response) =>{
    const {id}=req.params;
    const quotation = await Quotation.findByPk(id)

    if (quotation) {
        res.status(200).json({
            msg: "CONSULTAR COTIZACION POR ID",
            quotation
        })        
    }else{
        res.status(404).json({
            msg :"Cotización no existe"
        })
    }
}

export const saveQuotation = async (req: Request, res: Response) => {
    const {consecutive, idCustomers, Total, idUsers}= req.body;
    const quotation = await Quotation.create({consecutive, idCustomers, Total, idUsers})

    res.status(200).json({
        msg: 'CREAR NUEVA COTIZACIÓN',
        quotation
    })
}

export const updateQuotation = async (req: Request, res: Response) => {
    const {id, consecutive, idCustomers, Total, idUsers}= req.body;

    const quotation = await Quotation.update({consecutive, idCustomers, Total, idUsers}, {
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`ACTUALIZAR COTIZACIONES
        
        la cotizacion con el ID: ${id} se ha actualizado`        
    })
}