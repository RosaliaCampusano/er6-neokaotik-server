require("dotenv").config();
import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/playerRoutes";

import firebaseAccount from "../firebase-service.json";

const mongodbRoute : string = process.env.MONGODB_CONNECTION
  ? process.env.MONGODB_CONNECTION
  : "";

const app = express();
const PORT : number | string = process.env.PORT || 3000;

firebaseAccount.private_key = firebaseAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: firebaseAccount.project_id,
    privateKey: firebaseAccount.private_key,
    clientEmail: firebaseAccount.client_email,
  }),
});

app.use(bodyParser.json());
app.use("/api", router);

async function start() {
  try {
    await mongoose.connect(mongodbRoute);
    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

start();
