const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb+srv://renan:renan@omnistack-ggtzk.mongodb.net/SemanaOmnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

app.use(express.json());
app.use(routes)
 
app.listen('3000');