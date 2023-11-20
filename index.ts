import { getTransactions } from "./src/handlers/GetTransaction";
import { expenses } from "./src/models/Expenses";

const transactions: expenses = new expenses(getTransactions());

console.log(transactions);
