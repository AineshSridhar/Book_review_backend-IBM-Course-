import {DataTypes} from 'sequelize';
import {sequelize} from '../configuration/connection.js'

const userSchema = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default userSchema;