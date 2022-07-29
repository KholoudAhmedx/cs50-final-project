const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const authRoute = require('./routes/authRoute');
const todoRoute = require('./routes/todoRoute');

//create app
const app = express();

//passport config
require('./config/passport')(passport);

//set ejs in configuration which is going to be used to create templates
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Express-session middleware
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));

//passport middle ware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); 
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
})

//database configuration
const dbuser = 'mongodb+srv://kholoud:NONXV31RrNPpXVjb@todoapp.a7f4t.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbuser)
.then(() => app.listen(3000))
.catch(err =>console.log(err));


//Routes
app.get('/', (req, res) =>{
    res.render('./authentication/login')
})

//dashbord
app.get("/dashbord", async(req, res) => {

    if (!req.user) {
      req.flash('error_msg', 'Please log in to view this resourse');
      res.redirect('/login'); // not logged-in
      return;
    }

    const allTodo = await Todo.find({email_ :  req.user.email});

    // ok, req.user is defined
    res.render("dashbord", { name: req.user.name, todo : allTodo});
});

//todo 
app.use(todoRoute);

//authentication routes
app.use(authRoute);






