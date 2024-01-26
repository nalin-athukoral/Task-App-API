const todos = [
    { id: 1, title: "asdas" },
    { id: 2, title: "ddddddddddd" },
]

const getAllTasks = (req, res) => {
    res.status(200).json({ data: todos, status: 'success' });
}

const getSingleTask = async (req, res) => {
    const id = req.params.id;
    if (id > todos.length) {
        res.status(404).json({ status: 'fail', message: 'not found' });
    }
    else {
        const todo = todos.find((todo) => todo.id === Number(id));
        res.status(200).json({ data: todo, status: 'success' });
    }
}

const createTask = (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json({ data: todo });
};

const updateTask = (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id === Number(id));
    const index = todos.indexOf(todo);
    const keys = Object.keys(req.body);
    keys.forEach(key => {
        todo[key] = req.body[key];
    });
    todos[index] = todo;
    res.status(200).json({ data: todo });

};

const deleteTask = (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id === Number(id));
    todos.splice(todos.indexOf(todo), 1);
    res.status(200).json({ data: todos });
};



module.exports = {
    getAllTasks, getSingleTask, createTask, updateTask, deleteTask
}