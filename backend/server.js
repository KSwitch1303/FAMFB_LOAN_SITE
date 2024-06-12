require('dotenv').config()

const axios = require('axios')
const express = require('express')
const port = 5008
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const User = require('./models/userSchema')

    app.post('/register', async (req, res) => {
        try {
        const user = await new User(req.body)
        user.save()
        //   await axios.post(`${process.env.API_URL}/addtransaction`, { userID: user._id, amount: 8, description: 'Signup Bonus' })
        res.status(200).send(user)
        } catch (error) {
        res.status(201).send('Something went wrong')
        }
    })


  app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email, password })
      if (user) {
        res.status(200).send(user)
      } else {
        res.status(201).send('User not found')
      }
    } catch (error) {
      res.status(400).send('Something went wrong')
    }
  })
  app.post('/getuserdetails', async (req, res) => {
    const { email } = req.body
    try {
      const user = await User.findOne({ email })
      if (user) {
        res.status(200).send(user)
      } else {
        res.status(201).send('User not found')
    }} catch (error) {
      res.status(400).send('Something went wrong')
    }
  })


mongoose.connect(process.env.DB_URI)
  .then(() => app.listen(port, () => console.log(`Backend server is running`)))
  .catch((error) => console.log(error))
