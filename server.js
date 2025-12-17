import express from 'express';
import dotenv from 'dotenv';
import expenseRoutes from './src/routes/expense-router.js'
import {connectDB} from "./src/config/connectDB.js"

dotenv.config();
const PORT= process.env.PORT || 5000;

const app= express();

app.use(express.json());


app.use("/api/expense",expenseRoutes); 

connectDB().then(()=>{

    app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
    })
    
})


