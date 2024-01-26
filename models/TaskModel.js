const db = require('../config/connect');
const sequelize = require('sequelize');

const Task = db.define('task', {
    taskId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    status: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = Task;
