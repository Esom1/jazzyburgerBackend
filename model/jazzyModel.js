const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const jazzySchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  category:{
    type: String,
    required:true
  },
  price:{
    type: String,
    required:true
  }
});

const JAZZY = mongoose.model ('singlejazzy' , jazzySchema);
module.exports = JAZZY