// const router = require("express").Router();
// const ToDo = require("../models/todo")

// router.get("/", async(req,res) =>{
//     const allTodo = await Todo.find();
//     res.render ("index", {todo:allTodo})
// })

// module.exports= router;

const router = require('express').Router();
const ToDo = require('../models/todo'); // Ensure correct case for the model

router.get('/', async (req, res) => {
    try {
        const allTodos = await ToDo.find(); // Use 'ToDo' model with consistent naming
        res.render('index', { todos: allTodos }); // Use plural 'todos' for clarity
    } catch (err) {
        console.error('Error fetching to-dos:', err);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

module.exports = router;
