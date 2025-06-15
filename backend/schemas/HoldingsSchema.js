// Schema is the outline of the Data thar we are going to store in the database
const {Schema} = require('mongoose');

const HoldingsSchema = new Schema({
     name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,

});
module.exports = {HoldingsSchema};