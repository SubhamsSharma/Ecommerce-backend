import 'dotenv/config'
import express from "express"
import 'http-status-codes'
import { mongoose } from 'mongoose'
import cors from 'cors'
import { router as cartRouter} from "./routes/cart.js"
import { router as checkOutRouter } from "./routes/checkout.js"
import {router as productRouter } from "./routes/products.js"
import { errorHandlerMiddleware } from './middleware/error-handler.js'
const app = express()
const PORT  = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/checkout',checkOutRouter )

app.use(errorHandlerMiddleware)

// db connection and server start 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
    app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})
})
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });


