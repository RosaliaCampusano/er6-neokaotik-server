import express = require("express");
const router = express.Router();
import playerController = require("../controllers/playerController");
import middleware = require("../middlewares/verifyData");

router.post("/", middleware.verifyToken, playerController.createPlayer);

export = router;
