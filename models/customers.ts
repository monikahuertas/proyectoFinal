import { DataTypes } from "sequelize"
import db from "../db/connection"
import Users from "./users"

const Customers = db.define("Customer", {
    document:{
        type:DataTypes.STRING
    },
    first_name:{
        type:DataTypes.STRING
    },
    second_name:{
        type:DataTypes.STRING
    },
    first_lastName:{
        type:DataTypes.STRING
    },
    second_lastName:{
        type:DataTypes.STRING
    },
    city:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.TINYINT
    },
    idUsers:{
        type:DataTypes.BIGINT
    }
})

Customers.belongsTo(Users, {
    foreignKey: 'idUsers'
})

export default Customers