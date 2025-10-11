import { SocketEvents } from "../constants";

interface ServerToClientEvents {
  [SocketEvents.PLAYER_DISCONNECTED]: (email: string) => void;
}

interface ClientToServerEvents {
  [SocketEvents.PLAYER_CONNECTED]: (email: string) => void;
}

export type { ServerToClientEvents, ClientToServerEvents };
