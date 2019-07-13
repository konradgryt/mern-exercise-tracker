const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true }, // username, description, duration and date are validations
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true, //automatically create fields when it was crated and modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;