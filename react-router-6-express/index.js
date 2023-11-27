const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const todos = [
    {
        id: 1,
        title: 'Learn React Router',
        completed: false,
    },
    {
        id: 2,
        title: 'Learn Sveltekit',
        monpleted: false,
    },
];

app.get('/todos', (req, res) => res.send(todos));
app.post('/todos/add', (req, res) => {
    const todo = {
        id: crypto.randomUUID(),
        title: req.body.title,
        completed: false,
    };
    todos.push(todo);
    res.status(200).send(todo);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
