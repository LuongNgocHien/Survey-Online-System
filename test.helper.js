process.env.NODE_ENV = 'test';

require('./helpers/connectDatabase');
const {User} =require('./models/user');

beforeEach('Remove database for test', async()=>{
    await User.remove({});
});