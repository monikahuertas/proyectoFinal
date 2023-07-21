import { DataTypes } from "sequelize"
import db from "../db/connection"
import Customers from "./customers"
import Users from "./users"

const Quotation = db.define("Quotation", {
    consecutive:{
        type: DataTypes.STRING
    },
    idCustomers:{
        type: DataTypes.BIGINT
    },
    Total:{
        type: DataTypes.INTEGER
    },
    idUsers:{
        type:DataTypes.BIGINT
    }
})

// Quotation.belongsTo(Customers, {
//     foreignKey: 'idCustomers'
// })

Quotation.belongsTo(Users, {
    foreignKey: 'idUsers'
})

export default Quotation