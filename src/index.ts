require("dotenv").config();
import admin = require("firebase-admin");
import express = require("express");
import bodyParser = require("body-parser");
import mongoose = require("mongoose");
import routes = require("./routes/playerRoutes");
import firebaseAccount = require("../firebase-service.json");

const mongodbRoute = process.env.MONGODB_CONNECTION;

const app = express();
const PORT = process.env.PORT || 3000;

firebaseAccount.private_key = firebaseAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert({
  projectId: firebaseAccount.project_id,
  privateKey: firebaseAccount.private_key,
  clientEmail: firebaseAccount.client_email,
  }),
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
