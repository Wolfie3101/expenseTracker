"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetTransaction_1 = require("./src/handlers/GetTransaction");
const transactions = (0, GetTransaction_1.getTransactions)();
console.log(transactions);
