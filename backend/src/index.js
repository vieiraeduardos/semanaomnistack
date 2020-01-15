const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://eduardo:eduardo@cluster0-ynii6.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);
