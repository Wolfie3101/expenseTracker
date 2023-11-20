import { getTransactions } from "./src/handlers/GetTransaction";
import { expense } from "./src/models/Expense";

const transactions: expense[] = getTransactions();

console.log(transactions);
