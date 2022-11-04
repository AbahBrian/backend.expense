const express = require('express')
const dbconnection = require('./dbconnection')
const app = express()
const port = 5000
const cors = require ('cors')
const UserRouter = require('./routes/userRoute')
const TransactionRouter = require('./routes/transactionRoute')
const budgetRouter = require('./routes/budgetRoute')
const bodyParser = require('body-parser');

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', UserRouter)
app.use('/api',TransactionRouter)
app.use('/api',budgetRouter)
app.use(cors())

app.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`)
})