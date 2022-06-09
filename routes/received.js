const express = require('express')
const router = express.Router(); 
const logger = require('../logger/logger')
const Received = require('../models/received.js'); 
const expressValidator = require('express-validator'); 
router.use(expressValidator());
router.get('/received', (req,res) => {
    res.render('received')
});

router.post('/recieved', (req,res) =>{
    const username = req.body.username; 
    const phonenumber = req.body.phonenumber;
    const nin = req.body.nin;  
    const datetime = req.body.datetime; 
    const bookrecieved = req.body.bookrecieved;
    const cohort = req.body.cohort; 
    
    
    let error = req.validationErrors();
    if(error){
        res.render('recieved');
    }
    // registering new users to the database
    else {
        let newEntry = new Received({
            username: username, 
            phonenumber:phonenumber, 
            nin: nin,
            bookrecieved:bookrecieved,
            datetime:datetime,
            cohort: cohort, 
        });
        newEntry.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                logger.info('book has been received');
                res.redirect('/home');
            }
        })
    }
})

module.exports = router; 