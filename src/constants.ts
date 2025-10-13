const firebaseAccount: any = {
  type: process.env.FIREBASE_SERVICE_TYPE,
  project_id: process.env.FIREBASE_SERVICE_PRJECT_ID,
  private_key_id: process.env.FIREBASE_SERVICE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_SERVICE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_SERVICE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_SERVICE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_SERVICE_AUTH_URI,
  token_uri: process.env.FIREBASE_SERVICE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_SERVICE_AUTH_PROVIDER_x509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_SERVICE_CLIENT_x509_CERT_URL,
  universe_domain: process.env.FIREBASE_SERVICE_UNIVERSE_DOMAIN,
};

firebaseAccount.private_key.replace(/\\n/g, "\n");

export { firebaseAccount };

export const SocketEvents: any = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  PLAYER_CONNECTED: "player-connected",
  PLAYER_DISCONNECTED: "player-disconnected",
  ISTVAN_EVENT: "istvan:scanQR",
};
