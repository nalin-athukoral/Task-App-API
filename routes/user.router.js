const express = require('express');
const { createUser, deleteUser,getSingleUser,getAllUsers,updateUser, userWithTask} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', userWithTask)
// userRouter.get('/:id', getSingleUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


module.exports = userRouter;