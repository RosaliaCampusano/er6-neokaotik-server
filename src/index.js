require("dotenv").config();
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = process.env.MONGODB_CONNECTION;
const routes = require("./routes/playerRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const firebaseAccount = require("../firebase-service.json");

firebaseAccount.private_key = firebaseAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount),
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
