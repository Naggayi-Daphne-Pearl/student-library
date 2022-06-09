const express = require('express')
const router = express.Router(); 
const logger = require('../logger/logger')
const Taken = require('../models/taken.js'); 
const expressValidator = require('express-validator'); 
router.use(expressValidator());
router.get('/taken', (req,res) => {
    res.render('taken')
});

router.post('/taken', (req,res) =>{
    const username = req.body.username; 
    const phonenumber = req.body.phonenumber;
    const nin = req.body.nin;  
    const datetime = req.body.datetime; 
    const booktaken = booktaken;
    const cohort = req.body.cohort; 
    
    
    let error = req.validationErrors();
    if(error){
        res.render('taken');
    }
    // registering new users to the database
    else {
        let newEntry = new Taken({
            username: username, 
            phonenumber:phonenumber, 
            nin: nin,
            booktaken:booktaken,
            datetime:datetime,
            cohort: cohort, 
        });
        newEntry.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                logger.info('book has been taken');
                res.redirect('/reports');
            }
        })
    }
})



router.get('/deleteTaken/:id', async(req, res)=> {
    try{
      await Taken.deleteOne({_id:req.params.id})
      res.redirect('/reports');
  
    }
    catch{
          res.status(400).send('Unable to delete from database');
      
      
        }
    });


// gives access to someone to access our router
module.exports = router; 