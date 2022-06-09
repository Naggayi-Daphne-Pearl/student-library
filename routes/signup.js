const express = require('express'); 
const bcrypt = require('bcryptjs');
const router = express.Router(); 
const Signup = require('../models/signup');
const expressValidator = require('express-validator'); 
const logger = require('../logger/logger')
router.use(expressValidator());
router.get('/signup', (req,res) => {
    res.render('signup'); 
});

router.post('/signup', (req,res) =>{
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password; 
    const confirmpassword = req.body.confirmpassword; 
    
    let error = req.validationErrors();
    if(error){
        res.render('signup');
    }
    else {
        let newUser = new Signup({
            username: username, 
            email:email,
            password: password, 
            confirmpassword: confirmpassword
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }else{
                    newUser.password = hash;
                    newUser.save((err) => {
                        if(err){
                            console.error(err);
                        return;
                        }
                        else {
                        //we fisrt flash a message confirm the saving of a record
                        //we stay @ the same formSignup a new entity
                        logger.info('new Signup ')
                        res.redirect('/login')
                        }
                    })
                }
            })
        })
    }
})

// gives access to someone to access our router
module.exports = router; 