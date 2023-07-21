import { DataTypes } from "sequelize"
import db from "../db/connection"

const Detail = db.define("Detail", {
    idCotizacion:{
        type: DataTypes.BIGINT
    },
    idProducto:{
        type: DataTypes.BIGINT
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    valor_unitario:{
        type: DataTypes.INTEGER
    },
    valor_total:{
        type: DataTypes.INTEGER
    },
    state:{
        type:DataTypes.TINYINT
    }
})

export default Detail