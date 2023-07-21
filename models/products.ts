import {DataTypes} from "sequelize"
import db from "../db/connection"
import Users from "./users"

const Products = db.define("Product", {
    product:{
        type: DataTypes.STRING
    },
    Stock:{
        type: DataTypes.INTEGER
    },
    Purchase_Price:{
        type: DataTypes.DECIMAL(20,6)
    },
    Sale_Price:{
        type: DataTypes.DECIMAL(20,6)
    },
    idUsers:{
        type: DataTypes.BIGINT
    }
})

Products.belongsTo(Users, {
    foreignKey: 'idUsers'
})

export default Products