const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}),(req, res) => {
	// console.log("This is the login data", req.body)  prints the user's credentials
	req.session.user = req.user
	res.redirect('/home');
});

module.exports = router; 