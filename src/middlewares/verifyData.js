const { getAuth } = require("firebase-admin/auth");

const verifyToken = async (req, res, next) => {
  const idToken = req.body.tokenId;

  if (!idToken)
    return res
      .status(401)
      .send({ status: "FAILED", data: { error: "Unauthorized" } });

  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    req.email = decodedToken.email;
    next();
  } catch (err) {
    res.status(401).send({
      status: "FAILED",
      data: {
        error: err.message,
      },
    });
  }
};

module.exports = { verifyToken };
