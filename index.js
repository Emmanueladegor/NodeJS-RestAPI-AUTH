const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('Connected to DB!'));

//Middleware to Parse Json submissions
app.use(express.json());

//Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log("Up and Running!"));