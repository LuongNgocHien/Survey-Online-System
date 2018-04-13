const express = require('express');
const reload = require('reload');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const json = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// const parser = require('body-parser').urlencoded({extended: false});
// const exphbs = require('express-handlebars');
// const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const mongo = require('mongodb');
const mongoose = require('mongoose');
const {User} = require('./helpers/connectDatabase');
const { hash ,compare} = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginRequired = require('./controllers/user').loginRequired;
const db = mongoose.connection;
const app = express();
app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static('./src'));

app.get('/',(req,res)=>{res.render('home')});
app.get('/test',loginRequired ,(req, res)=>{
    res.send({
        message: 'dang nhap thanh cong voi token',
        user: req.decoded.username,
        name: req.decoded.name
    });
});
//test users ;
app.get('/user', require('./controllers/user').getUser);
app.get('/about',(req,res)=>{res.render('about')});
app.get('/survey',(req,res)=>{res.render('survey')});
app.get('/contact',(req,res)=>{res.render('contact')});
app.route('/login')
    .get(require('./controllers/user').login)
    .post(urlencodedParser, require('./controllers/user').loginUser);
app.route('/loginAPI')
    .get(require('./controllers/user').loginUserAPI)
    .post(urlencodedParser, require('./controllers/user').loginUserAPI);
app.route('/register')
    .get(require('./controllers/user').getRegister)
    .post(urlencodedParser, require('./controllers/user').registerUser);
app.route('/registerAPI')
    .get(require('./controllers/user').getRegister)
    .post(urlencodedParser, require('./controllers/user').registerUserAPI);
app.get('/logout', require('./controllers/user').logout);
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
module.exports = {app};
