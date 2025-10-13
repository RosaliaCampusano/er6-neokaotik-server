// require("dotenv").config();
import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { firebaseAccount } from "./constants";
import { SocketEvents } from "./constants";
import router from "./routes/playerRoutes";
import { createServer } from "http";
import { Server } from "socket.io";
import handlerConnection from "./socket/connection";

const mongodbRoute: string = process.env.MONGODB_CONNECTION
  ? process.env.MONGODB_CONNECTION
  : "";

const app = express();
const PORT: number | string = process.env.PORT || 3000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: firebaseAccount.project_id,
    privateKey: firebaseAccount.private_key,
    clientEmail: firebaseAccount.client_email,
  }),
});

io.on(SocketEvents.CONNECTION, (socket: any) => {
  handlerConnection(io, socket);
});

app.use(bodyParser.json());
app.use("/api", router);

async function start() {
  try {
    await mongoose.connect(mongodbRoute);
    httpServer.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

start();
