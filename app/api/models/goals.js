const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const GoalSchema = new Schema({
 category: {
  type: String,
  trim: true,  
  required: true,
 },
 description: {
    type: String,
    trim: true,
    required: true
   },
   id: {
    type: String,
    trim: true,
    required: true
   },
   percent_completed: {
    type: String,
    trim: true,
    required: true
   },
   status: {
    type: String,
    trim: true,
    required: true
   },
   session_id: {
    type: String,
    trim: true,
    required: true
   },

   

   

});
module.exports = mongoose.model('Goal', GoalSchema)
