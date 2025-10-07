import Player = require("../models/playerModel");

const createPlayer = async (newPlayer) => {
  try {
    let playerToInsert = new Player(newPlayer);
    const createdPlayer = await playerToInsert.save();
    return createdPlayer;
  } catch (err) {
    throw err;
  }
};

const updatePlayer = async (email, playerData) => {
  try {
    const updatedPlayer = await Player.findOneAndUpdate(
      { email: email },
      { $set: playerData },
      { new: true }
    );
    return updatedPlayer;
  } catch (err) {
    throw err;
  }
};

export = { createPlayer, updatePlayer };
