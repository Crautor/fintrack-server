export default class Saving {
  constructor({ savingId, userId, value, financialGoalId, description, title, createdAt }) {
    this.savingId = savingId;
    this.userId = userId;
    this.value = value;
    this.financialGoalId = financialGoalId;
    this.description = description;
    this.title = title;
    this.createdAt = createdAt;
  }
}
