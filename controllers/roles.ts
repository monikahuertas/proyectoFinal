import { Request, Response } from "express";
import Roles from "../models/roles";

export const getRoles = async (req:Request, res:Response)=>{
    const roles = await Roles.findAll()

    res.status(200).json({
        msg:"Consultar Roles Usuarios",
        roles
    })
}