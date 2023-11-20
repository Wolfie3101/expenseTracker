"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = void 0;
const YAML = __importStar(require("yaml"));
const fs = __importStar(require("fs"));
const Expense_1 = require("../models/Expense");
function getTransactions() {
    const transactionsArr = [];
    const transactionsArrParsed = [];
    const fileNames = fs.readdirSync("./src/db/expenses/");
    for (var file of fileNames) {
        transactionsArr.push(fs.readFileSync("./src/db/expenses/" + file, "utf8"));
        for (var transaction of transactionsArr) {
            transactionsArrParsed.push(YAML.parse(transaction));
        }
    }
    const data = [];
    for (var trans of transactionsArrParsed) {
        data.push(new Expense_1.expense(trans));
    }
    return data;
}
exports.getTransactions = getTransactions;
