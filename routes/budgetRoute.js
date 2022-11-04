const express = require ('express')
const budget = require('../models/budget')
const router = express.Router()

router.post("/all-budget", async (req,res) => {
    try {
        const result = await budget.find({userid:req.body.userid})
        res.send(result);
        } catch (error) {
        res.status(500).json('Error Coy');
      }
})


router.post("/add-budget", async (req, res) => {
    try {
        const newBudget = new budget(req.body);
        await newBudget.save()
        res.send(newBudget);
      } catch (error) {
        res.status(500).json(error);
      }
})

router.patch("/", async (req, res) => {
  res.status(200).json("Patch")
})

router.delete("/", async (req, res) => {
  res.status(200).json("Delete")
})

module.exports = router
