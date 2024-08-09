

const router = require('express').Router();
const ToDo = require('../models/todo'); // Ensure correct case for the model

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;

    // Create a new instance of the ToDo model
    const newToDo = new ToDo({
        title: todo // Assuming 'title' is the field in your schema
    });

    // Save the new to-do item to the database
    newToDo.save()
        .then(() => {
            console.log('Successfully added');
            res.redirect('/');
        })
        .catch((err) => console.log(err));
});

module.exports = router;
