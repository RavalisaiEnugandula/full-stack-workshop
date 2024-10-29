const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://ravalijntuhcej:Lovely521@in-aws.vrhcy.mongodb.net/")
const connection=mongoose.connection;
connection.on('connected',()=>(console.log("DB Connected")))
connection.on('error',(console.log("DB Error")))

module.exports= mongoose