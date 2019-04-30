import Sequelize from 'sequelize';
import db from '../database/db';

const Product = db.define('product', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: Sequelize.INTEGER,
    foreignKey: true, 
	},
	product_id: {
		type: Sequelize.INTEGER,
    foreignKey: true, 
	},
	description: {
		type: Sequelize.STRING,
    allowNull: false,
	},
	date_time: {
    type: Sequelize.DATE,
    default: Date.now(),
	},
});

export default Product;