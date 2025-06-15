const { model } = require('mongoose');

const {PositionsSchema} = require('../schemas/PositionsSchema');

const PositionsModel = new model("position", PositionsSchema); // yha jo humne name dia hai holding ko woh database mein collection ka naam hai, bas ek s lag jaega plural mai
module.exports = { PositionsModel };
