require("dotenv").config()


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = process.env.MONGODB_CONNECTION_STRING;


const app = express();
const PORT = process.env.PORT || 3000;


// Use bodyparser 
app.use(bodyParser.json());


async function start(){
    try{
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
    }catch(error){
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();