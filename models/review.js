import {sequelize} from '../configuration/connection.js';
import {DataTypes} from 'sequelize';
import user from './user.js';

const reviewSchema = sequelize.define('Review', {
    review: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

user.belongsToMany(book, {through: review});
booksSchema.belongsToMany(user, {through: review});

export default reviewSchema