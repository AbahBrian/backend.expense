const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', async(req, res) => {
    try {
        const userRoutes = await User.find()
        res.send(userRoutes)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("/login", async function (req, res) {
  try {
    const result = await User.findOne({ email: req.body.email, password: req.body.password })
    if (result) {
      res.send(result);
    }
    else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json("Error");
  }
})

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save()
    res.send(newuser);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
