const mongoose = require("mongoose");

const { Schema } = mongoose;

const playerSchema = new Schema({
  data: {},
  active: Boolean,
});

module.exports = mongoose.model("Player", playerSchema);
