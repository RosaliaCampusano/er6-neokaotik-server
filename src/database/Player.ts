import Player from "../models/playerModel";

const createPlayer = async (newPlayer: any) => {
  try {
    let playerToInsert = new Player(newPlayer);
    const createdPlayer = await playerToInsert.save();
    return createdPlayer;
  } catch (err) {
    throw err;
  }
};

const updatePlayer = async (email: string | any, playerData: any) => {
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
