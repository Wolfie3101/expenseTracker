export const Categories = {
  Housing: {
    variable: "housing",
    importance: true,
  },
  Childcare: {
    variable: "Childcare",
    importance: true,
  },
  Transportation: {
    variable: "Transportation",
    importance: true,
  },
  Utilities: {
    variable: "Utilities",
    importance: true,
  },
  FoodSupplies: {
    variable: "Food / Supplies",
    importance: true,
  },
  Pets: {
    variable: "Pets",
    importance: true,
  },
  Savings: {
    variable: "Savings",
    importance: true,
  },
  Entertainment: {
    variable: "Entertainment",
    importance: false,
  },
  Healthcare: {
    variable: "Healthcare",
    importance: true,
  },
  Insurance: {
    variable: "Insurance",
    importance: true,
  },
  PersonalCare: {
    variable: "Personal care",
    importance: false,
  },
  Debt: {
    variable: "Debt",
    importance: true,
  },
  Gifts: {
    variable: "Gifts",
    importance: false,
  },
  Donations: {
    variable: "Donations",
    importance: false,
  },
  Clothing: {
    variable: "Clothing",
    importance: true,
  },
};
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
