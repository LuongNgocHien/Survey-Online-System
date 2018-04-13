const {app} =require('./app');
const reload = require('reload');
require('./helpers/connectDatabase')
app.listen(process.env.PORT || 3000, console.log('Server Started!')); 
app.locals.isLocal = !process.env.PORT;
if(!process.env.PORT){
    require('reload')(app);
};