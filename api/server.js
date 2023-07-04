const express = require('express');
const mongoose = require('mongoose');
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
    const passengerSchema = new mongoose.Schema({
        PassengerId: Number,
    });
    const passengerModel = mongoose.model("passengers", passengerSchema);

    app.get("/", async (req, res) => {
        try {
            // la méthode .find() du Modèle permet de récupérer les documents
            const docs = await passengerModel.find({});
            res.json(docs);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Démarrage de l'app Express
    app.listen(port,hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}