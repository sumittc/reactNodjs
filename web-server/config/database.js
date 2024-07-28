const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('studentinfo', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
