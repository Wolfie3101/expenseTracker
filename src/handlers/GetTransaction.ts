import * as YAML from "yaml";
import * as fs from "fs";
import { expense } from "../models/Expense";

export function getTransactions() {
  const transactionsArr = [];
  const transactionsArrParsed: any = [];
  const fileNames = fs.readdirSync("./src/db/expenses/");
  for (var file of fileNames) {
    transactionsArr.push(fs.readFileSync("./src/db/expenses/" + file, "utf8"));
    for (var transaction of transactionsArr) {
      transactionsArrParsed.push(YAML.parse(transaction));
    }
  }
  const data: any = [];
  for (var trans of transactionsArrParsed) {
    data.push(new expense(trans));
  }

  return data;
}
