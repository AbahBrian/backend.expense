const mongoose = require('mongoose');
const connect = mongoose.connect
mongoose.connect('mongodb://abahbrian:1234@ac-f0gtwfs-shard-00-00.f8iyrau.mongodb.net:27017,ac-f0gtwfs-shard-00-01.f8iyrau.mongodb.net:27017,ac-f0gtwfs-shard-00-02.f8iyrau.mongodb.net:27017/Expense?replicaSet=atlas-hbcki2-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useunifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
