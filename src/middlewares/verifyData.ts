import fbAdmin = require("firebase-admin/auth");

const verifyToken = async (req: any, res: any, next: any) => {
  const idToken = req.body.tokenId;

  console.log("Verifying token:", idToken);

  if (!idToken)
    return res
      .status(401)
      .send({ status: "FAILED", data: { error: "Unauthorized" } });

  try {
    const decodedToken = await fbAdmin.getAuth().verifyIdToken(idToken);
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

export = { verifyToken };
