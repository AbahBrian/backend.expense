const express = require ('express')
const { findOneAndDelete } = require('../models/Transaction')
const Transaction = require('../models/Transaction')
const router = express.Router()

router.post("/all", async (req,res) => {
    try {
        const result = await Transaction.find({userid:req.body.userid})
        res.send(result);
        } catch (error) {
        res.status(500).json('Error Coy');
      }
})


router.post("/add-transaction", async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save()
        res.send(newTransaction);
      } catch (error) {
        res.status(500).json(error);
      }
})

router.post("/delete-transaction", async (req,res) => {
  try {
      const result = await Transaction.findOneAndDelete({_id:req.body.transactionId})
      res.send(result);
      } catch (error) {
      res.status(500).json('Error Coy');
    }
})

router.post("/update-transaction", async (req,res) => {
  try {
      const result = await Transaction.findOneAndDelete({userid:req.body.userid , })
      res.send(result);
      } catch (error) {
      res.status(500).json('Error Coy');
    }
})



module.exports = router
