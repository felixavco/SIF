import Sequelize from 'sequelize';
import db from '../database/db';

const Product = db.define('product', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING(50),
    allowNull: false,
    unique:true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	quantity: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	unit: {
		type: Sequelize.STRING(4),
		allowNull: false
	},
	unit_price: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT
	}
});

export default Product;