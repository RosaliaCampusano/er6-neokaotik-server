require("dotenv").config();
import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/playerRoutes";

const mongodbRoute : string = process.env.MONGODB_CONNECTION
  ? process.env.MONGODB_CONNECTION
  : "";

  interface frService {
    type: string,
    project_id: string,
    private_key_id: string,
    private_key: string,
    client_email: string,
    client_id: string,
    auth_uri: string,
    token_uri: string,
    auth_provider_x509_cert_url: string,
    client_x509_cert_url: string,
    universe_domain: string,
  }

  const firebaseAccount : any = {  
    type: process.env.FIREBASE_SERVICE_TYPE,
    project_id: process.env.FIREBASE_SERVICE_PRJECT_ID,
    private_key_id: process.env.FIREBASE_SERVICE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_SERVICE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_SERVICE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_SERVICE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_SERVICE_AUTH_URI,
    token_uri: process.env.FIREBASE_SERVICE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_SERVICE_AUTH_PROVIDER_x509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_SERVICE_CLIENT_x509_CERT_URL,
    universe_domain: process.env.FIREBASE_SERVICE_UNIVERSE_DOMAIN,
};

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
