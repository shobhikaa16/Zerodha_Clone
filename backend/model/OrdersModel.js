const { model } = require('mongoose');

const {OrdersSchema} = require('../schemas/OrdersSchema');

const OrdersModel = new model("order", OrdersSchema); // yha jo humne name dia hai holding ko woh database mein collection ka naam hai, bas ek s lag jaega plural mai
module.exports = { OrdersModel };
