const Sequelize = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost/acmeproductmanagers';

module.exports = new Sequelize(DATABASE_URL);
