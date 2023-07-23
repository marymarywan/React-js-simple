import customerRoutes from './routes/customer.js'
import express from 'express'

var app = express()

app.use(express.json())
app.use("/api/customer", customerRoutes)


app.listen(8800, ()=>{
    console.log("connected")
})