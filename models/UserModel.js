const db = require('../config/connect');
const sequelize = require('sequelize');

const User = db.define('user', {
    userId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;
