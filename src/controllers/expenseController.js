import Expense from '../models/ExpenseModel.js';

export const addExpense = async (req,res)=>{

    try {
        const {amount,paidBy,splitBetween,category,discription} = req.body;
        const newExpense= await Expense.create({amount,paidBy,splitBetween,category,discription});
        res.status(201).send("Expense added sucessfully ! ");
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error in adding new expense"})
        
    }
}

export const getExpense = async(req,res)=>{
    try {
        const expenses = await Expense.find().sort({createdAt:-1});
        res.status(200).json(expenses);
        
    } catch (error) {
        
        console.log("Error while getting the Expenses");
        console.log(error);
        res.send(500).json({message:"Server error in geting Expenses"})
    
    }
}
