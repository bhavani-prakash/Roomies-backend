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

export const deleteExpense= async(req,res)=>{
    try {
        const {id} = req.params;
        await Expense.findByIdAndDelete(id);
        res.status(200).json({message:"Expense deleted successfully"});
        
        
    } catch (error) {
        res.status(500).json({message:"Error in deleting expense"});
        console.log("Error in expense controler while deleting the note ")
        
    }
}
