const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TODO-APP-DATA');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to database'));

db.once('open',function(){
    console.log('Successfully connected to database');
});