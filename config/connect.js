const dbConfig = require('./db.config');
const sequelize = require('sequelize');

const db = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

// User.hasMany(Task, {
//     foreignKey: 'userId'
// });
// Task.belongsTo(User);



// db.sync({ force: true })
//     .then(() => console.log('Database connected'))
//     .catch(err => console.log('Error: ' + err))
    

module.exports = db;
