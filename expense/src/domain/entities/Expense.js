export default class Expense {
  constructor({ expenseId, userId, value, categoryId, paymentMethodId, expenseDate, description }) {
    this.expenseId = expenseId;
    this.userId = userId;
    this.value = value;
    this.categoryId = categoryId;
    this.paymentMethodId = paymentMethodId;
    this.expenseDate = expenseDate;
    this.description = description;
  }
}
