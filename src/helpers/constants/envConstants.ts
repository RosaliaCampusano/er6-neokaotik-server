
import { frService } from "../interfaces/interfaces";
import dotenv from "dotenv";


dotenv.config();


export const firebaseAccount: frService = {
  type: process.env.FIREBASE_SERVICE_TYPE,
  project_id: process.env.FIREBASE_SERVICE_PRJECT_ID,
  private_key_id: process.env.FIREBASE_SERVICE_PRIVATE_KEY_ID,
  private_key: (process.env.FIREBASE_SERVICE_PRIVATE_KEY) ? (process.env.FIREBASE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n")) : undefined,
  client_email: process.env.FIREBASE_SERVICE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_SERVICE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_SERVICE_AUTH_URI,
  token_uri: process.env.FIREBASE_SERVICE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_SERVICE_AUTH_PROVIDER_x509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_SERVICE_CLIENT_x509_CERT_URL,
  universe_domain: process.env.FIREBASE_SERVICE_UNIVERSE_DOMAIN,
};


export const mongodbRoute : string = process.env.MONGODB_CONNECTION
  ? process.env.MONGODB_CONNECTION
  : "";