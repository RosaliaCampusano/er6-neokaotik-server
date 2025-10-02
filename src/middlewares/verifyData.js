const { getAuth } = require("firebase-admin/auth");

const verifyToken = async (req, res, next) => {
  const idToken = req.body.tokenId;

  console.log("Verifying token:", idToken);

  if (!idToken)
    return res
      .status(401)
      .send({ status: "FAILED", data: { error: "Unauthorized" } });

  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    req.email = decodedToken.email;

    console.log("Token verified for email:", req.email);
    next();
  } catch (err) {
    console.log("FAILED ", err?.message);
    res.status(401).send({
      status: "FAILED",
      data: {
        error: err.message,
      },
    });
  }
};

module.exports = { verifyToken };
