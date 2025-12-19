import express from 'express';
import { addExpense ,getExpense} from '../controllers/expenseController.js';

const router = express.Router();

router.get("/",getExpense);
router.post("/",addExpense);
//router.delete("/:id",deleteExpense);

export default router;