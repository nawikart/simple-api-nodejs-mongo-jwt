const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const FoodSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 category: {
  type: String,
  trim: true,
  required: true
 }
});
module.exports = mongoose.model('Food', FoodSchema)
