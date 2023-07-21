import { Request, Response } from "express";
import Users from "../models/users"
import Roles from "../models/roles";


export const consultUsers = async(req: Request, res: Response) => {
    const users = await Users.findAll({
        attributes:["id","document", "names", "email", "state", "idRol"],
        include:[{
            model : Roles
        }],
        where: {
            state: 1
        }
    })
    res.status(200).json({
        msg:"Consultar Usuarios",
        users
    })
}

export const consultUserById = async (req: Request, res: Response) =>{
    const {id}=req.params; //se recibe id por parametros
    const user = await Users.findByPk(id) //pk = primary key

    if (user) {
        res.status(200).json({
            user
        })        
    }else{
        res.status(404).json({
            msg :"Usuario no existe"
        })
    }
}

export const consultUserByDocu = async (req: Request, res: Response) =>{
    const {document}=req.params;
    const user = await Users.findAll({
        where:{
            document
        }
    })
    if (user) {
        res.status(200).json({
            user
        })        
    }else{
        res.status(404).json({//preguntar por que no trae esto
            msg :"Usuario no existe"
        })
    }
}

export const saveUsers = async (req: Request, res: Response) => {
    const{ document, names, email,password} = req.body //se recibe por el body
    const idRol = 2
    
    const user = await Users.create({document, names, email,password,idRol}) //no se envia el state
    res.status(200).json({
        
        msg: `Se ha registrado un nuevo usuario con el ID: ${user.dataValues.id}`
    })
}

export const updateUsers = async (req: Request, res: Response) => {
    const{ id, document, names, email,password, state} = req.body

    const user = await Users.update({document, names, email,password, state}, {
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`El usuario con el ID: ${id} se ha actualizado`
    })
}

export const deleteUsers = async(req: Request, res: Response) => {
    const{ id } = req.params
    const state = 0

    const user = await Users.update({state}, {
        where: {
            id
        }
    })
    res.status(200).json({
        msg:`El usuario con el ID: ${id} se ha eliminado`
    })
}