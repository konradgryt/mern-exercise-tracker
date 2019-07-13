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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); // starts the server, listening on wanted port
