"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetTransaction_1 = require("./src/handlers/GetTransaction");
const Expenses_1 = require("./src/models/Expenses");
const transactions = new Expenses_1.expenses((0, GetTransaction_1.getTransactions)());
console.log(transactions);
