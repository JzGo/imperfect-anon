const express = require('express');
const path = require('path');

const mongo = require('./mongooseConfig')
// const mongoose = mongo.mongoose

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/hello', (req, res) => {
    return res.send('hello you!')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('life, uh, finds a way')
});