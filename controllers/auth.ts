import {Response, Request} from 'express'
import bcrypt from 'bcrypt'//encriptacion de constraseñas
import Users from "../models/users"
import jwt from 'jsonwebtoken'

const login =async(req: Request, res:Response)=>{
    const{email, password} =req.body
        try {
            //se verifica si el email existe
            const login =await Users.findOne({
                where:{
                    email
                }
            })
            if(!login){
                return res.status(400).json({
                    msg:"Usuario no existe"
                })
            }
            //verificar contraseña
            if (password !== login.dataValues.password){
                return res.status(400).json({
                    msg:"Contraseña incorrecta"
                })
            }        
            //verificar estado
            if (!login.dataValues.state){
                return res.status(400).json({
                    msg:"Usuario Inactivo"
                })
            }  
            return res.status(200).json({
                
            })
            //generar token
        //     const token=jwt.sign(login.dataValues.id)
        // }
        
    } catch (error) { 

    } 
}

export default login