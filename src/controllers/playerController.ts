import playerService = require("../services/playerService");
import player = require("../models/playerModel");

const obtainPlayer = async (email: string) => {
  const data = await fetch(
    `https://kaotika-server.fly.dev/players/email/${email}`
  );
  const response = await data.json();

  if (response.status !== "OK") {
    console.log("Error player not found");
    return response.data;
  } else {
    console.log("Player data obtained from Kaotika API");
    return response.data;
  }
};

const createPlayer = async (req: any, res: any) => {
  const playerData = await obtainPlayer(req.email);
  const existingPLayer = await player.findOne({ email: req.email });

  if (existingPLayer) {
    console.log("Player already exists, updating...");
    updatePlayer(req, res);
  } else {
    const newPlayer = {
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
    };

    try {
      const createdPlayer = await playerService.createNewPlayer(newPlayer);
      console.log("Player created with success!");
      res.status(201).send({ status: "OK", data: createdPlayer });
    } catch (err) {
      console.log("Error: ", err?.message);
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  }
};

const updatePlayer = async (req, res) => {
  const playerData = req.body;

  if (!playerData.active) {
    playerData.active = true;
  }

  try {
    const updatedPlayer = await playerService.updateOnePlayer(
      req.email,
      playerData
    );
    console.log("Player updated with success!");
    res.status(201).send({ status: "OK", data: updatedPlayer });
  } catch (err) {
    console.log("FAILED", err?.message);
    res
      .status(err?.status || 500)
      .send({ status: "FAILED", data: { error: err?.message || err } });
  }
};

export = {createPlayer};
