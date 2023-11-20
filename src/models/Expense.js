"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expense = void 0;
class expense {
    constructor(transaction) {
        this.date = transaction.transaction.date;
        this.category = transaction.transaction.category;
        this.description = transaction.transaction.description;
        this.payee = transaction.transaction.payee;
        this.expense = transaction.transaction.expense;
    }
}
exports.expense = expense;
