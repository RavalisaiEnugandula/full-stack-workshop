const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ravalijntuhcej:Lovely521@in-aws.vrhcy.mongodb.net/comments?retryWrites=true&w=majority&appName=In-AWS')

const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',(error) => (console.log("DB Error" + error)))

module.exports = mongoose

