"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var playerController_1 = __importDefault(require("../controllers/playerController"));
var verifyData_1 = __importDefault(require("../middlewares/verifyData"));
router.post("/", verifyData_1.default.verifyToken, playerController_1.default.createPlayer);
exports.default = router;
