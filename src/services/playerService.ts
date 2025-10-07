import Player = require("../database/Player");

const createNewPlayer = async (newPlayer: any) => {
  try {
    const createdPlayer = Player.createPlayer(newPlayer);
    return createdPlayer;
  } catch (err) {
    throw err;
  }
};

const updateOnePlayer = async (email: string | any, playerData: any) => {
  try {
    const updatedPlayer = Player.updatePlayer(email, playerData);
    return updatedPlayer;
  } catch (err) {
    throw err;
  }
};

export = {
  createNewPlayer,
  updateOnePlayer,
};
