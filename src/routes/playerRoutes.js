const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");
const middleware = require("../middlewares/verifyData");

router.post("/", middleware.verifyToken, playerController.createPlayer);

module.exports = router;
