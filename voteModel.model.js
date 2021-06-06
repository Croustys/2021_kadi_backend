const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  vote: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;
