"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var playerRoles_1 = require("../../roles/playerRoles");
var playerService_1 = __importDefault(require("../services/playerService"));
var playerModel_1 = __importDefault(require("../models/playerModel"));
var obtainPlayer = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var data, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://kaotika-server.fly.dev/players/email/".concat(email))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                response = _a.sent();
                if (response.status !== "OK") {
                    console.log("Error player not found");
                    return [2 /*return*/, response.data];
                }
                else {
                    console.log("Player data obtained from Kaotika API");
                    return [2 /*return*/, response.data];
                }
                return [2 /*return*/];
        }
    });
}); };
function assignPlayerRole(email) {
    console.log('Asignando rol al jugador...');
    var emailPatterns = email.split('@');
    switch (emailPatterns[emailPatterns.length - 1]) { // === emailPatterns[1]
        case (playerRoles_1.specialEmails.mortimer.split('@')[1]):
            return playerRoles_1.playerRolesByEmail[email];
        case (playerRoles_1.specialEmails.acolyte.split('@')[1]):
            return playerRoles_1.playerRolesByEmail[playerRoles_1.specialEmails.acolyte];
        default:
            return null;
    }
}
var createPlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerData, existingPLayer, newPlayer, createdPlayer, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, obtainPlayer(req.email)];
            case 1:
                playerData = _a.sent();
                return [4 /*yield*/, playerModel_1.default.findOne({ email: req.email })];
            case 2:
                existingPLayer = _a.sent();
                if (!existingPLayer) return [3 /*break*/, 3];
                console.log("Player already exists, updating...");
                updatePlayer(req, res);
                return [3 /*break*/, 7];
            case 3:
                newPlayer = {
                    name: playerData.name,
                    nickname: playerData.nickname,
                    email: playerData.email,
                    avatar: playerData.avatar,
                    classroom_Id: playerData.classroom_Id,
                    level: playerData.level,
                    experience: playerData.experience,
                    is_active: playerData.is_active,
                    profile: playerData.profile,
                    gold: playerData.gold,
                    tasks: playerData.tasks,
                    skills: playerData.skills,
                    created_date: playerData.created_date,
                    isBetrayer: playerData.isBetrayer,
                    inventory: playerData.inventory,
                    equipment: playerData.equipment,
                    active: false,
                    rol: assignPlayerRole(playerData.email),
                };
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, playerService_1.default.createNewPlayer(newPlayer)];
            case 5:
                createdPlayer = _a.sent();
                console.log("Player created with success!");
                res.status(201).send({ status: "OK", data: createdPlayer });
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                console.log("Error: ", err_1 === null || err_1 === void 0 ? void 0 : err_1.message);
                res
                    .status((err_1 === null || err_1 === void 0 ? void 0 : err_1.status) || 500)
                    .send({ status: "FAILED", data: { error: (err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || err_1 } });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var updatePlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerData, updatedPlayer, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerData = req.body;
                if (!playerData.active) {
                    playerData.active = true;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, playerService_1.default.updateOnePlayer(req.email, playerData)];
            case 2:
                updatedPlayer = _a.sent();
                console.log("Player updated with success!");
                res.status(201).send({ status: "OK", data: updatedPlayer });
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log("FAILED", err_2 === null || err_2 === void 0 ? void 0 : err_2.message);
                res
                    .status((err_2 === null || err_2 === void 0 ? void 0 : err_2.status) || 500)
                    .send({ status: "FAILED", data: { error: (err_2 === null || err_2 === void 0 ? void 0 : err_2.message) || err_2 } });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports = { createPlayer: createPlayer };
