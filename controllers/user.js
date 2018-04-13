const {User} = require('../models/User');
const jwt = require('jsonwebtoken');
const crypt = require('bcryptjs');

exports.getUser = (req, res)=>{
    User.find({})
    .then(users =>res.render('user',{users}))
    .catch((error) => res.send(error));
};

exports.getRegister = (req, res)=>{
    const loginedToken = req.cookies.token ||req.headers['x-access-token'];
    if (!loginedToken) return res.render('./account/register');
    jwt.verify(loginedToken, 'myapp', function (err, decoded) {
        if (err) return res.render('home');
        res.cookie.token = loginedToken;
        res.header({ 'x-access-token': loginedToken });
        res.render('./account/register', {user: decoded});
    });
};

exports.registerUser = (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, data) => {
        if (err) return res.json(err); 
        if (data) return res.render('./account/register', {message: 'Tên đăng nhập đã tồn tại hãy chọn tên khác'});
        const hashPassword = crypt.hashSync(req.body.password, 3);
        const user = new User({
            username: req.body.username,
            password: hashPassword,
            name: req.body.name,
            email: req.body.email
        });
        user.save(err => {
            if (err) return res.json(err);
            const token = jwt.sign({
                username: user.username,
                name: user.name
            }, 'myapp', { expiresIn: 3600 });
            res.cookie('token', token);
            res.header({ 'x-access-token': token });
            res.render('./account/register', {
                success: true,
                username: user.username,
                name: user.name,
                email: user.email
            });
        });
    });
};

exports.registerUserAPI = (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, data) => {
        if (err)return res.json(err); 
        if (data) {
            res.json({
                message: 'Username đã tồn tại',
                exist: true
            });
        } else {
            const hashPassword = crypt.hashSync(req.body.password, 3);
            const user = User({
                ID: Date.now(),
                username: req.body.username,
                password: hashPassword,
                name: req.body.name,
                email: req.body.email
            });
            user.save(err => {
                if (err) return res.json(err);
                res.status(201).json({
                    message: 'Đăng kí thành công',
                    
                    yourUser: {
                        ID: Date.now(),
                        username: req.body.username,
                        password: hashPassword,
                        name: req.body.name,
                        email: req.body.email
                    }
                });
            });
        }
    });
};

exports.loginUser = (req, res)=>{
    const email = req.body.email;
    User.findOne({email}, (err, user) => {
        if (err) return res.json(err);
        if (!user) return res.render('./account/login', {
            message: 'Sai username roi',
            email: req.body.email,
            password: req.body.password
        }); 
        const password = crypt.compareSync(req.body.password, user.password);
        if (!password) return res.render('./account/login', {message: 'Sai password roi'}); 
        const token = jwt.sign({
            email: user.email,
            name: user.name
        }, 'myapp', { expiresIn: 3600 });
        res.cookie('token', token);
        res.header({ 'x-access-token': token });
        res.render('home', {user});
    });
}
exports.login = (req, res)=>{
    const loginedToken = req.cookies.token ||req.headers['x-access-token'];
        console.log(loginedToken)
        if (!loginedToken) return res.render('./account/login');
    
            jwt.verify(loginedToken, 'myapp', function (err, decoded) {
                if (err) return res.render('./account/login');
                res.cookie.token = loginedToken;
                res.header({ 'x-access-token': loginedToken });
                res.render('home', {user: decoded});
            });
};
exports.loginUserAPI = (req, res) => {
    const email = req.body.email;
    User.findOne({email }, (err, user) => {
        if (err) return res.json(err);
        if (user) {
            const password = crypt.compareSync(req.body.password, user.password);
            if (password) {
                const token = jwt.sign({
                    email: user.email,
                    name: user.name
                }, 'myapp', { expiresIn: 3600 });
               
                res.cookie('token', token);
                res.header(
                    { 'x-access-token': token }
                );
                res.json({ 
                    success: true,
                    message: 'dang nhap thanh cong',
                    user: user.username,
                    name: user.name
                });
            } else {
                res.json({ message: 'sai password' });
            }
        } else {
            res.json({
                message: 'Sai username'
            });
        }
    });
};

exports.loginRequired = (req, res, next) => {
    const loginedToken = req.cookies.token ||req.headers['x-access-token'];
    if (!loginedToken) res.render('login', {message: 'yêu cầu đăng nhập'});
    jwt.verify(loginedToken, 'myapp', function (err, decoded) {
        if (err) res.render('index');
        //res.cookie('token', decoded)
        res.header(
            { 'x-access-token': loginedToken }
        );
        req.decoded = decoded;
        next();
    });
};

exports.loginRequiredAPI = (req, res, next) => {
    const loginedToken = req.cookies.token ||req.headers['x-access-token'];
    if (!loginedToken) {
        return res.status(403).send({
            success: false,
            message: 'Khong co token quyen truy cap. Hay dang nhap di'
        });
    } else {
        jwt.verify(loginedToken, 'myapp', function (err, decoded) {
            if (err) return res.json({ success: false, message: 'Chưa đăng nhập vào tài khoản đăng nhập' });
            res.header(
                { 'x-access-token': loginedToken }
            );
            req.decoded = decoded;
            next();
        });
    }
};

exports.logout = (req, res)=>{
    res.clearCookie('token');
    res.redirect('/login');
};
