const Player = require("../database/Player");

const createNewPlayer = async (newPlayer) => {
  try {
    const createdPlayer = Player.createPlayer(newPlayer);
    return createdPlayer;
  } catch (err) {
    throw err;
  }
};

const updateOnePlayer = async (email, playerData) => {
  try {
    const updatedPlayer = Player.updatePlayer(email, playerData);
    return updatedPlayer;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createNewPlayer,
  updateOnePlayer,
};
