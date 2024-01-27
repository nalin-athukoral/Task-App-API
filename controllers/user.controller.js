const User = require('../models/UserModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ data: users, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
}

const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.status(200).json({ data: user, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    console.log(req.body);
    try {
        const user = await User.create({ name, email });
        res.status(200).json({ data: user, status: 'success' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user.' });
    }

};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        const user = await User.findByPk(id);
        const updatedUser = await user.update({ name, email });
        res.status(200).json({ data: updatedUser, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        await user.destroy();
        res.status(200).json({ data: user, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
};

const userWithTask = async (req, res) => {
    try {
        const id = req.params.id;
        const userTask = await User.findByPk(id, { include: 'tasks' });
        
        res.status(200).json({ data: userTask, status: 'success' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user.' });
    }
}


module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    userWithTask
}