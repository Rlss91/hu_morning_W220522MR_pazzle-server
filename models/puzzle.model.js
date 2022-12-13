const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const difficultyEnum = require("../enums/difficultyEnum");

const puzzleSchema = new Schema({
  name: { type: String, required: true },
  pcs: { type: Number, required: true },
  difficulty: {
    type: String,
    default: difficultyEnum[0],
    enum: [...difficultyEnum],
  },
});

const Puzzle = mongoose.model("puzzles", puzzleSchema);

const selectAll = () => {
  return Puzzle.find({});
};

const createPuzzle = (puzzleData) => {
  const puzzle = new Puzzle(puzzleData);
  return puzzle.save();
};

module.exports = { selectAll, createPuzzle };
