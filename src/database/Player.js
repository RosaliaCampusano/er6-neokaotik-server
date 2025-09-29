const Player = require("../models/playerModel");

const createPlayer = async (newPlayer) => {
  try {
    let playerToInsert = new Player(newPlayer);
    const createdPlayer = await playerToInsert.save();
    return createdPlayer;
  } catch (err) {
    throw err;
  }
};

module.exports = { createPlayer };
