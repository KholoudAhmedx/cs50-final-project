const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo : {
        type : String,
        requried : true
    },
    email_ : {
        type : String,
        required : true
    },
    done : {
        type : String,
        requried : true
    }
    ,
    date :
    {
        type : Date,
        requried : true

    }

}, {timestamps : true});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
