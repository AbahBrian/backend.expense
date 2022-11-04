const mongoose = require('mongoose')
const budgetSchema = mongoose.Schema(
  {
    userid:String,
    category:String ,
    amount:Number,
  }
)

 
module.exports = mongoose.model('budget', budgetSchema)