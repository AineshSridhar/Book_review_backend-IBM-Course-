import {sequelize} from '../configuration/connection.js';
import {DataTypes} from 'sequelize';
import user from './user.js';
import book from "./books.js";

const reviewSchema = sequelize.define('Review', {
    review: {
        type: DataTypes.STRING, 
        allowNull: false
    }
});

user.belongsToMany(book, {through: reviewSchema});
book.belongsToMany(user, {through: reviewSchema});

export default reviewSchema