import {DataTypes} from "sequelize";
import {sequelize} from "../configuration/connection.js"

const booksSchema = sequelize.define('Book', {
    ISBN:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default booksSchema;