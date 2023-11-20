export class expense {
  date: Date;
  category: string;
  description: string;
  payee: string;
  expense: number;

  constructor(transaction: any) {
    this.date = transaction.transaction.date;
    this.category = transaction.transaction.category;
    this.description = transaction.transaction.description;
    this.payee = transaction.transaction.payee;
    this.expense = transaction.transaction.expense;
  }
}
