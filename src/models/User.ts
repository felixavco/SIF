import Sequelize from 'sequelize';
import db from '../database/db';

const User = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	first_name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	hire_date: {
		type: Sequelize.DATE,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING(15)
	},
	address: {
		type: Sequelize.TEXT
	}
});

export default User;
