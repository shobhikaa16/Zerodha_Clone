const { model } = require('mongoose');

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchema); // yha jo humne name dia hai holding ko woh database mein collection ka naam hai, bas ek s lag jaega plural mai
module.exports = { HoldingsModel };


