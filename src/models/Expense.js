"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expense = void 0;
class expense {
    constructor(trans) {
        this.date = trans.transaction.date;
        this.category = trans.transaction.category;
        this.description = trans.transaction.description;
        this.payee = trans.transaction.payee;
        this.expense = trans.transaction.expense;
    }
}
exports.expense = expense;
