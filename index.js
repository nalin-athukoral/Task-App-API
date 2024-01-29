const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/task.route');
const logMiddleware = require('./middlware/authmiddlware');
const app = express();
const test = require('./config/connect')
const Task = require('./models/TaskModel');
const User = require('./models/UserModel');
const userRouter = require('./routes/user.router');
const session = require('express-session');


require('dotenv').config();
// const PORT = process.env.PORT || 5281;
const PORT = process.env.PORT || 3000;

test.sync({ force: false })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))
   

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(logMiddleware);
app.use('/api/v1/task', logMiddleware, taskRouter);
app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});