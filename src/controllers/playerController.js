const playerService = require("../services/playerService");
const player = require("../models/playerModel");

const obtainPlayer = async (email) => {
  const data = await fetch(
    `https://kaotika-server.fly.dev/players/email/${email}`
  );
  const response = await data.json();

  if (response.status !== "OK") {
    res.status(401).send({ error: "Invalid Player" });
  } else {
    return response.data;
  }
};

const createPlayer = async (req, res) => {
  const playerData = await obtainPlayer(req.email);
  const existingPLayer = await player.findOne({ email: req.email });

  if (existingPLayer) {
    // --- Insert the PUT request & view if the active is true or false;
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
      res.status(201).send({ status: "OK", data: createdPlayer });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  }
};

module.exports = {
  createPlayer,
};
