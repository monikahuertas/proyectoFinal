import { DataTypes } from "sequelize";
import db from "../db/connection";
import Roles from "./roles";

const Users = db.define("User", {  //el "User" siempre es singularnpm
    document: {
        type: DataTypes.STRING
    },
    names:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.TINYINT
    },
    idRol:{
        type:DataTypes.BIGINT
    }
})

Users.belongsTo(Roles, {
    foreignKey: 'idRol'
})

export default Users