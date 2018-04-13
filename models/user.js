const mongoose =require('mongoose');
const { hash, compare } = require('bcrypt');

mongoose.connect('mongodb://localhost/survey');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String,trim: true,unique: true,require: true },
    username: {type: String,trim: true,unique: true,require: true },
    email: {type: String,require: true},
    password: { type: String, required: true, trim: true },
});
const User = mongoose.model('User',userSchema);

// class User extends UserModel {
//     static async signUp(name, username,email, password) {
//         const encrypted = await hash(password, 8);
//         const user = new UserModel({ name,username,email ,password: encrypted});
//         return user.save();
//     }
//     static async signIn(email, password) {
//         const user = await User.findOne({ email });
//         if (!user) throw new Error('Cannot find user.');
//         const same = await compare(password, user.password);
//         if (!same) throw new Error('Invalid password.');
//     }
// };

module.exports = {User};