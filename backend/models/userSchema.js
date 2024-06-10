const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountBalance: {
    type: Number,
    default: 0
  },
  loanAmount: {
    type: Number,
    default: 0
  },
  creditLimit: {
    type: Number,
    default: 0
  }
},{timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User