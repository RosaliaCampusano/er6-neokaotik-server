const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");
const middleware = require("../middlewares/verifyData");

router.post(
  "/test-token",
  middleware.verifyToken,
  playerController.createPlayer
);

const playerController = require("../controllers/playerController");
const verifyData = require("../middlewares/verifyData");

router.post("/verifyToken", verifyData, playerController.createPlayer);


module.exports = router;
