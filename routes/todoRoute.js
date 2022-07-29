const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/todo');

//add todo
todoRouter.post('/add/todo', (req, res) => {

    const {todo} = req.body;
    const newTodo = new Todo({todo, email_: req.user.email , done : "0"});
    if(todo==""){
        res.redirect('/')
    }
    newTodo.save()
    .then(()=>{
        console.log("done")
        res.redirect('/dashbord')
    })
    .catch(err=>console.log(err))

    //console.log({todo, date, email});

});

//delete todo
todoRouter.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("deleted")
        res.redirect('/dashbord')
    })
    .catch((err)=>console.log(err));
})

//mark todo as done
todoRouter.get("/update/todo/:_id", (req, res) =>{
    const {_id} = req.params;
    const todo_info = Todo.find();
    console.log(todo_info);
    Todo.updateOne({_id}, {done : "1"})
        .then(() =>{
            console.log('updated');
            res.redirect('/dashbord')
        })
        .catch(err=>console.log(err));
})

module.exports = todoRouter;
