
const express = require('express')
const router = express.Router(); 
 
const Taken = require('../models/taken'); 
const expressValidator = require('express-validator');  
router.use(expressValidator());

router.get('/reports', async(req,res)=>{
     
    try {
       
        const data = await Taken.find({}).sort({$natural:-1})

        res.render('reports', {
          takens : data, 
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});



// gives access to someone to access our router
module.exports = router; 