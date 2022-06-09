const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const expressValidator = require('express-validator'); 
router.use(expressValidator());
router.get('/home', (req,res) => {
    res.render('home')
});


// Logout form
// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/login');
// });

router.post('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) { return (err); }
    res.redirect('/login');
  });
});

// gives access to someone to access our router
module.exports = router; 