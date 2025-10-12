import { Socket, Server } from "socket.io";
import { SocketEvents } from "../../constants";
import Player from "../../database/Player";

const onIstvanEvent = (io: Server, socket: Socket) => {
  socket.on(SocketEvents.ISTVAN_EVENT, async (playerEmail: string) => {
    console.log(`Received from client:`, playerEmail);
    const updatedPlayer = await updateIsInsideAttribute(playerEmail);
    io.emit(SocketEvents.ISTVAN_EVENT, {
      name: updatedPlayer?.name,
      email: updatedPlayer?.email,
      isInside: updatedPlayer?.isInside,
    });
  });
};

const updateIsInsideAttribute = async (playerEmail: string) => {
  console.log(`getting player from DB by email: ${playerEmail}`);

  const player = await Player.getPlayerbyEmail(playerEmail);

  const updatePlayerAttributes = await Player.updatePlayer(playerEmail, {
    isInside: !player?.isInside,
  });
  console.log(`Update ${updatePlayerAttributes?.isInside}`);

  return updatePlayerAttributes;
};

export { onIstvanEvent };
