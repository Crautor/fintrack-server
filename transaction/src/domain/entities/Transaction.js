export default class Transaction {
  constructor({ transactionId, userId, value, categoryId, transactionDate, description, recurrence, type }) {
    this.transactionId = transactionId;
    this.userId = userId;
    this.value = value;
    this.categoryId = categoryId;
    this.transactionDate = transactionDate;
    this.description = description;
    this.recurrence = recurrence;
    this.type = type;
  }
}
