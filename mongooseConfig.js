const mongoose = require('mongoose');

const MONGO = 'mongodb://localhost/imperfect-anon';

mongoose.connect(process.env.MONGODB_URI || MONGO, { useNewUrlParser: true, useUnifiedTopology: true } , err =>{
    if(err){
        throw err;
    } else {
        console.log(`Connected to ${MONGO}!`)
    }
});