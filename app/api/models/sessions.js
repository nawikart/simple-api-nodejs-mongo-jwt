const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const SessionSchema = new Schema({
id: {
  type: String,
  trim: true,  
  required: true,
 },
 category: {
  type: String,
  trim: true,
  required: true
 },
 title: {
  type: String,
  trim: true,
  required: true
 },
 description: {
  type: String,
  trim: true,
  required: true
 },
 mp3_url: {
    type: String,
    trim: true,
    required: true
   },
   length: {
      type: String,
      trim: true,
      required: true
     }


});
module.exports = mongoose.model('Session', SessionSchema)
