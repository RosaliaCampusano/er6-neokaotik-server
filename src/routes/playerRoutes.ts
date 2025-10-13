import express from "express";
const router = express.Router();
import playerController from "../controllers/playerController";
import middleware from "../middlewares/verifyData";

router.post("/", middleware.verifyToken, playerController.createPlayer);
router.get("/", playerController.getPlayers);

export default router;
