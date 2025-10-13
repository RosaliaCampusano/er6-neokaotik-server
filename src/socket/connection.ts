import { Socket, Server } from "socket.io";
import Player from "../models/playerModel";
import { SocketEvents } from "../constants";
import { onIstvanEvent } from "./handlers/istvanHander";

const handlerConnection = (io: Server, socket: Socket) => {
  // --- Successful connection with the customer ---
  socket.on(SocketEvents.PLAYER_CONNECTED, async (playerEmail: string) => {
    await handlePlayerConnection(socket, playerEmail);
  });

  // --- The event is only heard when the client emits the event ---
  onIstvanEvent(io, socket);

  // --- Connection with customer disconnect ---
  socket.on("disconnect", async () => {
    await handlePlayerDisconnection(socket);
  });
};

const handlePlayerConnection = async (socket: Socket, playerEmail: string) => {
  console.log(`Player with email ${playerEmail} connected`);

  await Player.findOneAndUpdate(
    { email: playerEmail },
    { socketId: socket.id }
  );
};

const handlePlayerDisconnection = async (socket: Socket) => {
  console.log("Player disconnected");

  const player = await Player.findOne({ socketId: socket.id });

  if (!player) return;

  const updatedAttributes: any = { socketId: null };

  if (player.isInside) {
    updatedAttributes.isInside = !player.isInside;
  }

  await Player.findOne(
    { socketId: socket.id },
    { $set: updatedAttributes },
    { new: true }
  );
};

export default handlerConnection;
