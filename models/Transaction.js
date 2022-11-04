const mongoose = require('mongoose')
const TransactionSchema = mongoose.Schema(
  {
    userid:String,
    date:Date ,
    amount:Number,
    type:String,
    category:String,
    description:String
  }
)

 
module.exports = mongoose.model('Transaction', TransactionSchema)