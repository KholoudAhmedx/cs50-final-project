const User = require('../models/User');
const bcrypt = require('bcryptjs');
const express = require('express');
const authRouter = express.Router();
const passport = require('passport');


authRouter.get('/login', (req, res) =>{
    res.render('./authentication/login');
})

authRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashbord',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
});

authRouter.get('/register', (req, res) =>{
    res.render('./authentication/register');
});

authRouter.post('/register', (req, res) => {
    
    const {name , email, password1, password2} = req.body;
    let errors = [];

    //check for required fields
    if(!name || !email || !password1 || !password2)
    {
        errors.push({msg : 'Please fill in all fields'});
    }

    //check password match
    if(password1 !== password2)
    {
        errors.push({msg : 'Passwords do not match'})
    }

    
    //check password length
    if(password1.length < 6)
    {
        errors.push({msg : 'Password should be at least 6 characters'})
    }

    if(errors.length > 0)
    {
        //there are errors 
        res.render('./authentication/register', {
            errors,
            name,
            email,
            password1,
            password2
        });
    }
    else
    {
        //validation passed
        User.findOne({email : email})
            .then(user =>{
                if(user){
                    //user exists
                    errors.push({msg : 'Email already exists'})
                    res.render('./authentication/register', {
                        errors,
                        name,
                        email,
                        password1,
                        password2
                    });
                }
                else
                {
                    const newUser = new User({
                        name, 
                        email,
                        password: password1
                    })
                    // console.log(newUser)
                    // res.send('hello');

                    //hash password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) =>
                    {
                        if(err) throw err;
                        //set password to hashed
                        newUser.password = hash;

                        //save user
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are registered and can log in')
                                res.redirect('/login');
                            })
                            .catch(err => console.log(err));
                    }))

                }
            });


    }
})


//logout
authRouter.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
        req.flash('success_msg', 'You are logged out');
    });
});

module.exports = authRouter;