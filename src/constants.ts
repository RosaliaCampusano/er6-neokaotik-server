const firebaseAccount: any = {
  project_id: process.env.FIREBASE_SERVICE_PROJECT_ID,
  private_key: process.env.FIREBASE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
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
