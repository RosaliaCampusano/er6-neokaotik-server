const firebaseAccount: any = {
  project_id: process.env.FIREBASE_SERVICE_PRJECT_ID,
  private_key: process.env.FIREBASE_SERVICE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_SERVICE_CLIENT_EMAIL,
};

export { firebaseAccount };

export const SocketEvents: any = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  PLAYER_CONNECTED: "player-connected",
  PLAYER_DISCONNECTED: "player-disconnected",
  ISTVAN_EVENT: "istvan:scanQR",
};
