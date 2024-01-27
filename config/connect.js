const dbConfig = require('./db.config');
const sequelize = require('sequelize');
// const User = require('../models/UserModel');
// const Task = require('../models/TaskModel');

// User.hasMany(Task, { as: 'tasks', foreignKey: 'userId' });
// Task.belongsTo(User, { foreignKey: 'userId' });



const db = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});



// db.sync({ force: true })
//     .then(() => console.log('Database connected'))
//     .catch(err => console.log('Error: ' + err))
    

module.exports = db;
