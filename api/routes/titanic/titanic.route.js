const express = require('express');
const mongoose = require('mongoose');

const router = express.Router('router');

router.get("/",function(req,res,next){
    res.send("Api is working");
});


const passengerSchema = new mongoose.Schema({
    PassengerId: Number,
});
const passengerModel = mongoose.model("passengers", passengerSchema);

router.get('/data',async function(req,res,next){
        try {
            // la méthode .find() du Modèle permet de récupérer les documents
            const docs = await passengerModel.find({});
            res.json(docs);
        } catch (err) {
            res.status(500).send(err.message);
        }
});

module.exports=router;