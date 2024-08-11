import express from 'express'
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import ProductRoute from "./routes/product.route.js"
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use("/api/products", ProductRoute)



//Connected to MongoDb
mongoose.connect("mongodb+srv://krishkumarchhabra90:juaocQCwryoSEEdm@backenddb.sqtik.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("connected to database")
    app.listen(3000, ()=>{
        console.log("server is running on port 3000")
    });
})
.catch(()=>{
    console.log("connection failed")
})