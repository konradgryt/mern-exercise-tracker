const mongoose = require('mongoose');

const Schema = mongoose.Schema; //all schemas start the same, so we can put it in variable

const userSchema = new Schema({
  username: { //username field with validations
    type: String,
    required: true,
    unique: true,
    trim: true, //trimming whitespace
    minlength: 3 //at least 3 characters
  },
}, {
  timestamps: true, //automatically create fields when it was crated and modified
});

const User = mongoose.model('User', userSchema); // 'User' is just a name - can be anything

module.exports = User; //Exporting created User