const express = require('express'); 
const mongoose = require ('mongoose'); 
const bodyParser = require('body-parser'); 
const path = require ('path');
const passport = require ('passport'); 

const logger = require('./logger/logger')

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}); 

const app = express(); 

// const config = require ('./config/config'); 
const register = require('./routes/signup');
const login = require('./routes/login'); 
const home = require('./routes/home');
const logout = require('./routes/home'); 
const taken = require('./routes/taken');
const received = require('./routes/received'); 
const reports = require('./routes/reports');

// mongoose.connect(config.database);
// const db = mongoose.connection; 

// db.once('open', () => {
//    logger.info('connected successfully');
// })

// db.on('error', (err) => {
//     logger.error(err);
// })

app.engine('pug', require('pug').__express); 
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')));

require('./config/passport')(passport);

app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session()); 

// connecting our app declared in routes
app.use('/', register); 
app.use('/', login); 
app.use('/', home);
app.use('/', logout); 
app.use('/', taken); 
app.use('/', received); 
app.use('/', reports)

app.get('*', (req, res) => {
    res.send('404 Oops, it looks like the page doesnt exist');
  });


const port = process.env.PORT || 5000;
  application.listen(port, () => {
      console.log(`Listening at port ${port}`);
  });



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    