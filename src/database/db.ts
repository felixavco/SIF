const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PWD, 
  {
	host: 'localhost',
	dialect: 'mysql'
  }
);

export default db;
