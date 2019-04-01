const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const Mp3Schema = new Schema({
 title: {
  type: String,
  trim: true,  
  required: true,
 },
 thumbnail: {
  type: String,
  trim: true,
  required: true
 },
 mp3: {
    type: String,
    trim: true,
    required: true
    }
});
module.exports = mongoose.model('Mp3', Mp3Schema)
