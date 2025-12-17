import mongoose from 'mongoose';


const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 1
    },

    paidBy: {
      type: String,
      required: true
    },

    // Members who share the expense (auto = others, editable)
    splitBetween: {
      type: [String],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one member must be selected for split"
      }
    },

    category: {
      type: String,
      enum: ["Food", "Rent", "Electricity", "Internet", "Groceries", "Other"],
      default: "Other"
    },

    description: {
      type: String,
      trim: true
    },

  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;

