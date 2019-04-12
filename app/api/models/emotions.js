const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const EmotionSchema = new Schema({
 
 emotion: {
  type: String,
  trim: true,
  required: true
 }


});
module.exports = mongoose.model('Emotion', EmotionSchema)
