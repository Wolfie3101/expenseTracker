export class expense {
  date: Date;
  category: String;
  description: String;
  payee: String;
  expense: Number;

  constructor(trans: any) {
    this.date = trans.transaction.date;
    this.category = trans.transaction.category;
    this.description = trans.transaction.description;
    this.payee = trans.transaction.payee;
    this.expense = trans.transaction.expense;
  }
}
