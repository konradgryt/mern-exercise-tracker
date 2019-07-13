const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // allows having env variables in .env file

const app = express();
const port = process.env.PORT || 5000; // creating express server

app.use(cors());
app.use(express.json()); // cors middleware, allows to parse json

const uri = process.env.ATLAS_URI; //database is stored in uri/connection,
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true}); //use create index is depreciated, thats why flag is added

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB database established successfully")
})

//requiring the files 
//const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//and then using the files - when somebody goes to /exercise in URL then its going to load everything in the route
//app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); // starts the server, listening on wanted port
