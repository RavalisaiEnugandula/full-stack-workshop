const express=require('express')
const port =3000
const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json("Hello");
})
app.listen(port,()=>{
    console.log("Server is running in port:" +port)
    console.log(`Server is running in Port:${port}`)
})