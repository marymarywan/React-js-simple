import customerRoutes from './routes/customer.js'
import express from 'express'
import cors from 'cors'

var app = express()


app.use(express.json())
app.use(cors())
app.use("/api/customer", customerRoutes)



app.listen(8800, ()=>{
    console.log("connected")
})