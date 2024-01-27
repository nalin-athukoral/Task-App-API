const Task = require('../models/TaskModel');

const getAllTasks = async (req, res) => {
    try {
        const todos = await Task.findAll();
        res.status(200).json({ data: todos, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
}

const getSingleTask = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Task.findByPk(id);
        res.status(200).json({ data: todo, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
}

const createTask = async (req, res) => {
    const { title, status, userId } = req.body;
    try {
        const user = await Task.create({ title, status, userId });
        res.status(200).json({ data: user, status: 'success' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user.' });
    }
};

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, status } = req.body;
        const todo = await Task.findByPk(id);
        const updatedTodo = await todo.update({ title, status });
        res.status(200).json({ data: updatedTodo, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
};

const deleteTask = async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await Task.findByPk(id);
        await todo.destroy();
        res.status(200).json({ data: todo, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
};



module.exports = {
    getAllTasks, getSingleTask, createTask, updateTask, deleteTask
}