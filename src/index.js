require("dotenv").config();
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = process.env.MONGODB_CONNECTION;
const routes = require("./routes/playerRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
const serviceAccount = JSON.parse(serviceAccountString);
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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
