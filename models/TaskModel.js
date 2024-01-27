const db = require('../config/connect');
const sequelize = require('sequelize');
const User = require('./UserModel');

Task = db.define('task', {
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


User.hasMany(Task, { as: 'tasks', foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });


module.exports = Task;
