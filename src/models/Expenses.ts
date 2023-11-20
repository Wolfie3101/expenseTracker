import { expense } from "../models/Expense";

export class expenses {
  expenses: expense[];

  constructor(expenses: expense[]) {
    this.expenses = expenses;
  }

  getExpense() {
    var finalExpense: number = 0;
    for (var expense of this.expenses) {
      finalExpense += expense.expense;
    }
    return finalExpense;
  }
}
