const Joi = require("joi");

const validate = require("./validate");
const difficultyEnum = require("../enums/difficultyEnum");

const newPuzzleSchema = Joi.object({
  name: Joi.string().required().min(2).max(255).trim(),
  pcs: Joi.number().required().min(4).max(Number.MAX_SAFE_INTEGER),
  difficulty: Joi.string().valid(...difficultyEnum),
});

const validateNewPuzzleSchema = (puzzleData) => {
  return validate(newPuzzleSchema, puzzleData);
};

module.exports = {
  validateNewPuzzleSchema,
};
