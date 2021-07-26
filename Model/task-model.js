const Mongoose = require("mongoose");

const todoSchema = new Mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date
    },
    label:{
        type:String
    }


});

const Task = Mongoose.model('Task',todoSchema);
module.exports =Task;


