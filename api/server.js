const express = require('express');
const mongoose = require('mongoose');
const titanic = require('./routes/titanic/titanic.route');
const cors = require('cors');
require('dotenv').config();

const hostname = process.env.IP;
const port = process.env.PORT;

mongoose
    .connect(`mongodb://${hostname}:27017/passenger`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(init);

const app = express();

async function init(){
    app.use(cors());
    app.use('/',titanic);
    
    // Démarrage de l'app Express
    app.listen(port,hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}