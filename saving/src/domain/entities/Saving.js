export default class Saving {
  constructor({ savingId, userId, value, financialGoalId, description, title }) {
    this.savingId = savingId;
    this.userId = userId;
    this.value = value;
    this.financialGoalId = financialGoalId;
    this.description = description;
    this.title = title;
  }
}
