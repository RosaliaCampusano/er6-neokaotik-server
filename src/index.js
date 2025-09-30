require("dotenv").config();
const { initializeApp, credential } = require("firebase-admin/app");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = process.env.MONGODB_CONNECTION;
const routes = require("./routes/playerRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

initializeApp({
  credential: credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use("/api", routes);

async function start() {
  try {
    await mongoose.connect(mongodbRoute);
    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
