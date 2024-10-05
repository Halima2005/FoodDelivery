import cors from "cors"
import 'dotenv/config'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartRoutes.js"
import foodRouter from "./routes/foodRoutes.js"
import orderRouter from "./routes/orderRoutes.js"
import userRouter from "./routes/userRoutes.js"
//app config
const app = express()
const port = process.env.PORT || 4000;

//middlewire
app.use(express.json())
app.use(cors())
// db conncetion 
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://food:1234@cluster0.ykj1s.mongodb.net/?