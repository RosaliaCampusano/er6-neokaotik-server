const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
require("dotenv").config();

initializeApp({
  credential: applicationDefault(),
});

const verifyToken = async (req, res) => {
  const idToken = req.body.tokenId;

  if (!idToken)
    return res
      .status(401)
      .send({ status: "FAILED", data: { error: "Unauthorized" } });

  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const email = decodedToken.email;
    req.user = {
      email: email,
    };
    // --- Insert the logic to the API Legends request ---
  } catch (err) {
    res.status(401).send({
      status: "FAILED",
      data: {
        error: err.message,
      },
    });
  }
};

module.exports = verifyToken;
