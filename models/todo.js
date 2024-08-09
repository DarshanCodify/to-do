const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model("todo",ToDoSchema);
