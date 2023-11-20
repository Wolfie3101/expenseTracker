"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenses = void 0;
class expenses {
    constructor(expenses) {
        this.expenses = expenses;
    }
    getExpense() {
        var finalExpense = 0;
        for (var expense of this.expenses) {
            finalExpense += expense.expense;
        }
        return finalExpense;
    }
}
exports.expenses = expenses;
