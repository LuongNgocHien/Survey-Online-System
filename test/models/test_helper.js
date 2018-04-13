process.env.NODE_ENV = 'test';
require('../../helpers/connectDatabase');
// const {User} =require('./models/user');
const {User} =require('../../models/user.js');

beforeEach('Remove database for test', async()=>{
    await User.remove({});
});